import { DataSource } from "typeorm";
import { User } from "../models/User.model";
import { SavingGoal } from "../models/SavingGoal.model";
import { Income } from "../models/Income.model";
import { Expense } from "../models/Expense.model";
import { Budget } from "../models/Budget.model";
import { Analytics } from "../models/Analytics.model";

export const database = new DataSource({
    type: "postgres",
    host: `${process.env.DB_HOSTNAME}`,
    port: 5432,
    username: `${process.env.DB_USERNAME}`,
    password: `${process.env.DB_PASSWORD}`,
    database: `${process.env.DB_DATABASE}`,
    synchronize: true,
    logging: true,
    entities: [User, SavingGoal, Income, Expense, Budget, Analytics],
    subscribers: [],
    migrations: []
})

export const userRepository = database.getRepository(User)
export const savingRepository = database.getRepository(SavingGoal)
export const incomeRepository = database.getRepository(Income)
export const expenseRepository = database.getRepository(Expense)
export const budgetRepository = database.getRepository(Budget)
export const analyticsRepository = database.getRepository(Analytics)