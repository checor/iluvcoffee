import { Entity, PrimaryGeneratedColumn, Column, Index } from "typeorm";

@Entity()
export class Event {
    @PrimaryGeneratedColumn()
    id: number;

    @Index()
    @Column()
    name: string;

    @Column()
    type: string;

    @Column('json')
    payload: Record<string, any>;
}
