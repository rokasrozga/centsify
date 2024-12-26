import dotenv from "dotenv";
import { DataSource } from "typeorm";
import { User } from "../models/User.model.ts";
import { SavingGoal } from "../models/SavingGoal.model.ts";
import { Income } from "../models/Income.model.ts";
import { Expense } from "../models/Expense.model.ts";
import { Budget } from "../models/Budget.model.ts";
import { Analytics } from "../models/Analytics.model.ts";

dotenv.config()
export const database = new DataSource({
    type: "postgres",
    host: process.env.DB_HOSTNAME,
    port: process.env.DB_PORT as unknown as number,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    synchronize: true,
    logging: true,
    entities: ["src/models/*.model.ts"],
    subscribers: [],
    migrations: []
})

export const userRepository = database.getRepository(User)
export const savingRepository = database.getRepository(SavingGoal)
export const incomeRepository = database.getRepository(Income)
export const expenseRepository = database.getRepository(Expense)
export const budgetRepository = database.getRepository(Budget)
export const analyticsRepository = database.getRepository(Analytics)

export default database