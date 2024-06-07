import GoogleProvider from 'next-auth/providers/google'
import GithubProvider from 'next-auth/providers/github'
import CredentialsProvider from "next-auth/providers/credentials"
import { NextAuthOptions } from 'next-auth'
import { PrismaAdapter } from '@next-auth/prisma-adapter'
import { db } from './db'
import bcrypt from "bcryptjs"


export const authOptions: NextAuthOptions = {
    adapter: PrismaAdapter(db),
    secret: process.env.NEXTAUTH_SECRET,
    session: {
      strategy: 'jwt'
    },
    pages: {
      signIn: "/login" //replace with the default signIn route
    },
    providers: [
        GithubProvider({
            clientId: process.env.GITHUB_ID as string,
            clientSecret: process.env.GITHUB_SECRET as string,
        }),
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID as string,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
            authorization: {
              params: {
                prompt: 'consent',
                access_type: 'offline',
                response_type: 'code',
              },
            },
          }),
          CredentialsProvider({
            // The name to display on the sign in form (e.g. "Sign in with...")
            name: "Credentials",
            // `credentials` is used to generate a form on the sign in page.
            // You can specify which fields should be submitted, by adding keys to the `credentials` object.
            // e.g. domain, username, password, 2FA token, etc.
            // You can pass any HTML attribute to the <input> tag through the object.
            credentials: {
              email: { label: "Email", type: "email", placeholder: "example@gmail.com" },
              password: { label: "Password", type: "password", placeholder: "******" }
            },

            async authorize(credentials) {
          
              if (!credentials?.email || !credentials.password) {
                return null
              } 
              const user = await db.user.findUnique({
                where: {email: credentials?.email}
              })
              if(!user){
                return null
              }
              const passwordMatch = await bcrypt.compare(credentials.password,user.password)
              if(!passwordMatch){
                return null
              }
              return {
                 id: user.id,
                 name: user.name,
                 email: user.email
              }
            }
          })
    ],
    callbacks: {
        async jwt({token,user}){
          return token
        },
        async session({session, user, token}){
          return session
        }
    }
}