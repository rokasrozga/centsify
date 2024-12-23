import { Column, Decimal128, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Analytics {
    @PrimaryGeneratedColumn("uuid")
    id: string

    @Column({type: "money"})
    monthlyIncomeTotal: Decimal128

    @Column({type: "money"})
    monthlyExpenseTotal: Decimal128
    
    @Column()
    precentageSpent: Decimal128

    @Column()
    spendingTrends: string
}