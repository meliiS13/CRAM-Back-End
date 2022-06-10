import { Test, TestingModule } from '@nestjs/testing';
import { ReseñasController } from './reseñas.controller';

describe('ReseñasController', () => {
  let controller: ReseñasController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ReseñasController],
    }).compile();

    controller = module.get<ReseñasController>(ReseñasController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
