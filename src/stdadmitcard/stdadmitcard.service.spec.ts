import { Test, TestingModule } from '@nestjs/testing';
import { StdadmitcardService } from './stdadmitcard.service';

describe('StdadmitcardService', () => {
  let service: StdadmitcardService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [StdadmitcardService],
    }).compile();

    service = module.get<StdadmitcardService>(StdadmitcardService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
