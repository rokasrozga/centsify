import jwt from "jsonwebtoken";
import dotenv from "dotenv"
import { Response } from "express";
dotenv.config()
console.log(process.env.JWT_SECRET)

export const generateToken = (userId: string, res: Response): string => {
    try {
        const token = jwt.sign({userId}, (process.env.JWT_SECRET as string), {
            expiresIn: "1d"
        })

        res.cookie("jwt", token, {
            maxAge: 1*24*60*60*1000,
            httpOnly: true,
            sameSite: "strict",
            secure: process.env.NODE_ENV !== "development"
        })

        return token
    } catch (error) {
        console.log("Error in generateToken:", error)
        return ""
    }
}