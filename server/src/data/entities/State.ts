import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class State {
    @PrimaryGeneratedColumn()
    public id: number;

    @Column()
    public name: string;

    @Column()
    public code: string;

    @Column()
    public zipcode: number;

    @CreateDateColumn()
    public created: Date;

    @UpdateDateColumn()
    public updated: Date;

}