import { Test, TestingModule } from '@nestjs/testing';
import { ExamformService } from './examform.service';

describe('ExamformService', () => {
  let service: ExamformService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ExamformService],
    }).compile();
    
    service = module.get<ExamformService>(ExamformService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
