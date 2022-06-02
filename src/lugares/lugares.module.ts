import { Module } from '@nestjs/common';
import { LugaresService } from './lugares.service';

@Module({
  providers: [LugaresService]
})
export class LugaresModule {}
