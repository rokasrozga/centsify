import { Column, Decimal128, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { User } from "./User.model.ts";

@Entity()
export class Expense {
    @PrimaryGeneratedColumn("uuid")
    id: string

    @Column({type: "money"})
    amount: Decimal128

    @Column({type: "timestamp"})
    date: Date

    @Column()
    category: string

    @Column()
    description: string

    @Column()
    paymentMethod: string

    @ManyToOne(()=> User, (user) => user.expense)
    user: User
}