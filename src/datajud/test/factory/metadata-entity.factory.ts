import { MetadadosEntity } from '../../entities/metadata.entity';
import { ProcessoClientDtoFactory } from './processo-client-dto.factory';
import { ProcessoEntityFactory } from './processo-entity.factory';

export class MetadadosEntityFactory {
  static get(): MetadadosEntity {
    const metadadosEntity = new MetadadosEntity();
    metadadosEntity.processoId = ProcessoEntityFactory.getEntity().id;
    metadadosEntity.id = 1;
    metadadosEntity.dados = ProcessoClientDtoFactory.get();
    return metadadosEntity;
  }
}
