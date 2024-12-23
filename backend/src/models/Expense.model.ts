import { Column, Decimal128, Entity, ManyToOne, PrimaryColumn, PrimaryGeneratedColumn, Timestamp } from "typeorm";
import { User } from "./User.model";

@Entity()
export class Expense {
    @PrimaryGeneratedColumn("uuid")
    id: string

    @Column({type: "money"})
    amount: Decimal128

    @Column()
    date: Timestamp

    @Column()
    category: string

    @Column()
    description: string

    @Column()
    paymentMethod: string

    @ManyToOne(()=> User, (user) => user.expense)
    user: User
}