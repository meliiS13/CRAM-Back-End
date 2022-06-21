import { Module } from '@nestjs/common';
import {reseniasService} from './resenias.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { reseniasController } from './resenias.controller';
import { resenia } from './resenias.entity';

@Module({
  imports: [TypeOrmModule.forFeature([resenia])],
  providers: [reseniasService],
  controllers: [reseniasController],
})

export class reseniaModule {}
