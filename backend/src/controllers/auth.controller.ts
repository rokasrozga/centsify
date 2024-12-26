import { Request, Response } from "express"
import { userRepository } from "../lib/db"
import bcrypt from "bcrypt"
import { User } from "../models/User.model"

export const register = async (req: Request, res: Response): Promise<void> => {
    const {fullName, email, password} = req.body
    try {
        if (password.length < 8) res.status(400).json({message: "Password must be at least 8 characters long"})
    
            const user = await userRepository.findBy({email})
            if (user) res.status(400).json({message: "User already exists"})
        
            const SALT = await bcrypt.genSalt(10)
            const hashedPassword = await bcrypt.hash(password, SALT)
        
            const newUser = new User(fullName, email, hashedPassword)
        
            if (newUser) {
                await userRepository.save(newUser)
                const {passwordHash, ...userWithoutPassword } = newUser
                res.status(201).json({newUser})
            }
    } catch (error: any) {
        res.status(500).json({message: "Internal server error"})
        console.log("Error in register:", error.message)
    }
}

export const login = async (req: Request, res: Response): Promise<void> => {

}

export const loginUsingGoogle = async (req: Request, res: Response): Promise<void> => {
    
}

export const logout = async (req: Request, res: Response): Promise<void> => {
    
}