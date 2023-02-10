import { Module } from '@nestjs/common';
import { BiodataModule } from './biodata/biodata.module';
import { VoterinfoModule } from './voterinfo/voterinfo.module';

@Module({
  imports: [BiodataModule, VoterinfoModule]
})
export class VoterIdregistrationModule {}
