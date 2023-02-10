import { Test, TestingModule } from '@nestjs/testing';
import { VoterinfoController } from './voterinfo.controller';
import { VoterinfoService } from './voterinfo.service';

describe('VoterinfoController', () => {
  let controller: VoterinfoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [VoterinfoController],
      providers: [VoterinfoService],
    }).compile();

    controller = module.get<VoterinfoController>(VoterinfoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
