import { Request, Response } from "express"
import { userRepository } from "../lib/db"
import bcrypt from "bcrypt"
import { User } from "../models/User.model"
import { generateToken } from "../lib/utils"

export const register = async (req: Request, res: Response): Promise<void> => {
    const {fullName, email, password} = req.body
    try {
        if (password.length < 8) {
            res.status(400).json({message: "Password must be at least 8 characters long"})
            return
        } 
            const user = await userRepository.findBy({email})
            if (user[0]){
                res.status(400).json({message: "User already exists"})
                return
            }
        
            const SALT = await bcrypt.genSalt(10)
            const hashedPassword = await bcrypt.hash(password, SALT)
        
            const newUser = new User(fullName, email, hashedPassword)
        
            if (newUser) {
                generateToken(newUser.id, res)
                await userRepository.save(newUser)
                const {passwordHash, ...userWithoutPassword } = newUser
                res.status(201).json({newUser})
                return
            }
    } catch (error: any) {
        res.status(500).json({message: "Internal server error"})
        console.log("Error in register:", error.message)
        return
    }
}

export const login = async (req: Request, res: Response): Promise<void> => {
    const {email, password} = req.body
    try {
        const users = await userRepository.findBy({email})
        if (users.length === 0) {
            res.status(400).json({message: "Invalid credentials"})
            return
        }
        const isPasswordValid = await bcrypt.compare(password, users[0].passwordHash)

        if (!isPasswordValid) {
            res.status(400).json({message: "Invalid credentials"})
            return
        }

        generateToken(users[0].id, res)
        res.status(200).json({message: "Login successful"})
    } catch (error: any) {
        console.log("Error in login:", error.message)
        res.status(500).json({message: "Internal server error"})
    }
}

// For first time login using Google, for existing users, see ./profile.controller.ts
export const loginUsingGoogle = async (req: Request, res: Response): Promise<void> => {
    
}

export const logout = async (req: Request, res: Response): Promise<void> => {
    try {
        res.clearCookie("jwt")
        res.status(200).json({message: "Logout successful"})
    } catch (error: any) {
        console.log("Error in logout:", error.message)
        res.status(500).json({message: "Internal server error"})
    }
}