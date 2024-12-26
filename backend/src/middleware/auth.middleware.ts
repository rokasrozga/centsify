import jwt from "jsonwebtoken"
import { NextFunction, Request, Response } from "express";
import { userRepository } from "../lib/db";

export const protect = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
        const token = req.cookies.jwt
        if (!token) res.status(401).json({message: "Unauthorised - Missing JWT token"})

        const decoded = jwt.verify(token, (process.env.JWT_SECRET as string)) as {userId: string}

        if (!decoded) res.status(401).json({message: "Unauthorised - Invalid JWT token"})

        const user = await userRepository.findBy({id: decoded.userId})

        if (!user) res.status(404).json({message: "User not found"})

        req.user = user

        next()
    } catch (error: any) {
        res.status(500).json({message: "Internal server error"})
        console.log("Error in protect (middleware):", error.message)
    }
}