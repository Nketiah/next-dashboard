import { db } from "@/utils/db"
import { NextResponse } from "next/server"
import bcrypt from "bcryptjs"


export async function GET(){
    return NextResponse.json({message: "true"})
}

export async function POST(req: Request){
    try {
        const body = await req.json()
        const {email, password, name} = body
        const emailExist = await db.user.findUnique({
            where: {email: email}
        })

        if(emailExist){
            return NextResponse.json({user: null, message: "User with this email already exist"},{status: 409}) 
        }

        const nameExist = await db.user.findUnique({
            where: {name: name}
        })
        if(nameExist){
            return NextResponse.json({user: null, message: "User with this name already exist"},{status: 409}) 
        }
        const hashedPassword = await  bcrypt.hash(password, 12)
        const newUser = await db.user.create({
            data: {email, password: hashedPassword, name}
        })
        //  newUser.password = undefined as any
        const {password: newUserPassword, ...rest} = newUser
        return NextResponse.json({user: rest, message: "User created"},{status: 201})
       
    } catch (error) {
        
    }
}