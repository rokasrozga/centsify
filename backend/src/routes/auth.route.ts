import { Router } from "express";
import {login, loginUsingGoogle, logout, register, addGoogleUser} from "../controllers/auth.controller.ts"
import { protect } from "../middleware/auth.middleware.ts"
const authRoute = Router()

// api/auth/register
authRoute.post("/register", register)

// api/auth/login
authRoute.post("/login", login)

// api/auth/googlelogin
authRoute.post("/googlelogin", loginUsingGoogle)

// api/auth/logout
authRoute.post("/logout", logout)

authRoute.put("/addgoogleuser", protect ,addGoogleUser)


export default authRoute