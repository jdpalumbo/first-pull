import {
    Column, CreateDateColumn, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn,
    UpdateDateColumn
} from "typeorm";
import { State } from "./State";

@Entity()
export class Address {
    @PrimaryGeneratedColumn()
    public id: number;

    @Column()
    public address: string;

    @Column()
    public city: string;

    @Column()
    public zipcode: number;

    @OneToOne(() => State)
    @JoinColumn()
    state: State;

    @CreateDateColumn()
    public created: Date;

    @UpdateDateColumn()
    public updated: Date;
}