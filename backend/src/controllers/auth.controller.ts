import { Request, Response } from "express"

export const register = async (req: Request, res: Response): Promise<void> => {
    res.status(400).json({message: "test"})
}

export const login = async (req: Request, res: Response): Promise<void> => {

} 

export const logout = async (req: Request, res: Response): Promise<void> => {
    
}