import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Expense } from "./Expense.model";
import { Income } from "./Income.model";
import { Budget } from "./Budget.model";
import { SavingGoal } from "./SavingGoal.model";

@Entity()
export class User {
    @PrimaryGeneratedColumn("uuid")
    id: string

    @Column({nullable: false})
    fullName: string

    @Column({unique: true, nullable: false})
    email: string

    @Column({nullable: false})
    passwordHash: string

    @Column({nullable: true})
    googleOauthId: string

    @OneToMany(() => Expense, (expense) => expense.user)
    expense: Expense[]

    @OneToMany(() => Income, (income) =>  income.user)
    income: Income[]

    @OneToMany(() => Budget, (budget) => budget.user)
    budget: Budget[]

    @OneToMany(() => SavingGoal, (savingGoal) => savingGoal.user)
    savingGoal: SavingGoal[]

    constructor(
        fullName: string,
        email: string,
        passwordHash: string,
        googleOauthId?: string
    ) {
        this.fullName = fullName
        this.email = email
        this.passwordHash = passwordHash
        if (googleOauthId) this.googleOauthId = googleOauthId
    }
}