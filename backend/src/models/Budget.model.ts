import { Column, Decimal128, Entity, ManyToMany, ManyToOne, PrimaryColumn, PrimaryGeneratedColumn, Timestamp } from "typeorm";
import { User } from "./User.model";

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

    @Column()
    period: Timestamp

    @ManyToOne(() => User, (user) => user.budget)
    user: User
}