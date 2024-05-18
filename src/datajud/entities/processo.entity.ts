import {
  OneToMany,
  Column,
  PrimaryGeneratedColumn,
  Entity,
  Index,
} from 'typeorm';
import { MovimentoEntity } from './movimento.entity';

@Entity()
export class ProcessoEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  @Index('process_entity_process_code_index', { unique: true })
  codigoProcesso: string;

  @Column()
  classe: string;

  @Column()
  sistema: string;

  @Column()
  formato: string;

  @Column()
  tribunal: string;

  @Column({ type: 'timestamp' })
  dataUltimaAtualizacao: Date;

  @Column()
  grau: string;

  @Column({ type: 'timestamp' })
  dataAjuizamento: Date;

  @OneToMany(() => MovimentoEntity, (movement) => movement.processo, {
    cascade: true,
  })
  movimentacoes: MovimentoEntity[];

  @Column('simple-array')
  assuntos: string[];

  @Column({ type: 'timestamp' })
  dataCriacao: Date;
}
