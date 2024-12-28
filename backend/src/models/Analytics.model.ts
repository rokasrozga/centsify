import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Analytics {
    @PrimaryGeneratedColumn("uuid")
    id: string

    @Column({type: "numeric"})
    monthlyIncomeTotal: number

    @Column({type: "numeric"})
    monthlyExpenseTotal: number
    
    @Column({type: "numeric"})
    precentageSpent: number

    @Column()
    spendingTrends: number
}