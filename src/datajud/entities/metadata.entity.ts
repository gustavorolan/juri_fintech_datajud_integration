import { Column, PrimaryGeneratedColumn, Entity } from 'typeorm';

@Entity()
export class MetadadosEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('jsonb', { nullable: true })
  dados: any;

  @Column()
  processoId: number;
}
