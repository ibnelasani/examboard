import { Test, TestingModule } from '@nestjs/testing';
import { ExamformController } from './examform.controller';

describe('ExamformController', () => {
  let controller: ExamformController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ExamformController],
    }).compile();

    controller = module.get<ExamformController>(ExamformController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
