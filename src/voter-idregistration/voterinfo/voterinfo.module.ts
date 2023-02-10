import { Module } from '@nestjs/common';
import { VoterinfoService } from './voterinfo.service';
import { VoterinfoController } from './voterinfo.controller';
import { Voterinfo } from './entities/voterinfo.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Biodatum } from '../biodata/entities/biodatum.entity';


@Module({
  imports: [TypeOrmModule.forFeature([Voterinfo, Biodatum])],
  controllers: [VoterinfoController],
  providers: [VoterinfoService]
})
export class VoterinfoModule {}
