import { ManyToOne, Column, PrimaryGeneratedColumn, Entity } from 'typeorm';
import { ProcessoEntity } from './processo.entity';

@Entity()
export class MovimentoEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nome: string;

  @Column({ type: 'timestamp' })
  data: Date;

  @ManyToOne(() => ProcessoEntity, (process) => process.movimentacoes)
  processo: ProcessoEntity;
}
