import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LugaresService } from './lugares.service';
import { LugaresController } from './lugares.controller';
import { Lugar } from './lugares.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Lugar])],
  providers: [LugaresService],
  controllers: [LugaresController],
})
export class LugarModule {}