import { Test, TestingModule } from '@nestjs/testing';
import { StdadmitcardController } from './stdadmitcard.controller';

describe('StdadmitcardController', () => {
  let controller: StdadmitcardController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [StdadmitcardController],
    }).compile();

    controller = module.get<StdadmitcardController>(StdadmitcardController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
