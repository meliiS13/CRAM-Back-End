import { Module } from '@nestjs/common';
import {ReseñasService} from './reseñas.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ReseñasController } from './reseñas.controller';
import { Reseña } from './reseñas.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Reseña])],
  providers: [ReseñasService],
  controllers: [ReseñasService],
})

export class ReseñaModule {}
