import { Column, Decimal128, Entity, ManyToMany, ManyToOne, PrimaryColumn, PrimaryGeneratedColumn, Timestamp } from "typeorm";
import { User } from "./User.model.ts";

@Entity()
export class Budget {

    @PrimaryGeneratedColumn("uuid")
    id: string

    @Column()
    category: string

    @Column({type: "money"})
    limitAmount: Decimal128

    @Column({type: "money"})
    limitTotal: Decimal128

    @Column({type: "timestamp"})
    period: Date

    @ManyToOne(() => User, (user) => user.budget)
    user: User
}