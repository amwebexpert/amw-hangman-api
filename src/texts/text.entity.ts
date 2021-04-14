import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Text {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    uuid: string;

    @Column()
    categoryid: number;

    @Column()
    original: string;

    @Column()
    normalized: string;
}
