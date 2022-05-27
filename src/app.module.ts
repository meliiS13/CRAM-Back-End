import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LugaresController } from './lugares/lugares.controller';

@Module({
  imports: [],
  controllers: [AppController, LugaresController],
  providers: [AppService],
})
export class AppModule {}
