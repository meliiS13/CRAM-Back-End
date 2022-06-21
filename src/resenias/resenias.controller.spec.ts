import { Test, TestingModule } from '@nestjs/testing';
import { reseniasController } from './resenias.controller';

describe('reseniasController', () => {
  let controller: reseniasController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [reseniasController],
    }).compile();

    controller = module.get<reseniasController>(reseniasController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
