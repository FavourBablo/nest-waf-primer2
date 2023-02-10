import { Test, TestingModule } from '@nestjs/testing';
import { VoterinfoService } from './voterinfo.service';

describe('VoterinfoService', () => {
  let service: VoterinfoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [VoterinfoService],
    }).compile();

    service = module.get<VoterinfoService>(VoterinfoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
