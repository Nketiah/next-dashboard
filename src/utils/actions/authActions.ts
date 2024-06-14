"use server"
import { User } from "@prisma/client"
import { db } from "../db"
import bcrypt from "bcryptjs"


export const registerUser = async (user: Omit<User, "id" | "role">) => {
   const result = await db.user.create({
    data: {
        ...user,
        password: await bcrypt.hash(user.password,12)
    }
   })
}