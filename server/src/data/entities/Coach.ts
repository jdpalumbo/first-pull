import {
    Column, CreateDateColumn, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn,
    UpdateDateColumn
} from "typeorm";
import { Address } from "./Address";

@Entity()
export class Coach {
    @PrimaryGeneratedColumn()
    public id: number;

    @Column()
    public name: string;

    @OneToOne(() => Address)
    @JoinColumn()
    address: Address;

    @CreateDateColumn()
    public created: Date;

    @UpdateDateColumn()
    public updated: Date;
}
