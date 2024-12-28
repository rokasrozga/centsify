import { Column, Decimal128, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { User } from "./User.model.ts";

@Entity()
export class SavingGoal {
    @PrimaryGeneratedColumn("uuid")
    id: string

    @Column({type: "money"})
    goalAmount: Decimal128

    @Column({type: "money"})
    currentSavings: Decimal128

    @Column({type: "timestamp"})
    targetDate: Date

    @ManyToOne(() => User, (user) => user.savingGoal)
    user: User
}