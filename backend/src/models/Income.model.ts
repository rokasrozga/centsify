import { Column, Decimal128, Entity, ManyToMany, ManyToOne, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";
import { User } from "./User.model.ts";

@Entity()
export class Income {
    @PrimaryGeneratedColumn("uuid")
    id: string

    @Column({type: "money"})
    amount: Decimal128

    @Column({type: "timestamptz"})
    date: Date

    @Column()
    category: string

    @Column()
    description: string

    @Column()
    recurrenceDetails: string

    @ManyToOne(() => User, (user) => user.income)
    user: User
}