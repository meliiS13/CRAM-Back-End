import { Test } from '@nestjs/testing';
import { UsuariosController } from './usuarios.controller';

describe('UsuariosController', () => {
  let controller: UsuariosController;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      controllers: [UsuariosController],
    }).compile();

    controller = module.get<UsuariosController>(UsuariosController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
