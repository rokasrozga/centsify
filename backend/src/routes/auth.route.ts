import { Router } from "express";
import {login, logout, register} from "../controllers/auth.controller.ts"
const authRoute = Router()

// api/auth/register
authRoute.post("/register", register)

// api/auth/login
authRoute.post("/login", login)

// api/auth/logout
authRoute.post("/logout", logout)

// api/auth/check

export default authRoute