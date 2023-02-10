import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { VoterinfoService } from './voterinfo.service';
import { CreateVoterinfoDto } from './dto/create-voterinfo.dto';
import { UpdateVoterinfoDto } from './dto/update-voterinfo.dto';

@Controller('voterinfo')
export class VoterinfoController {
  constructor(private readonly voterinfoService: VoterinfoService) {}

  @Post()
  create(@Body() createVoterinfoDto: CreateVoterinfoDto) {
    return this.voterinfoService.create(createVoterinfoDto);
  }

  @Get()
  findAll() {
    return this.voterinfoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.voterinfoService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateVoterinfoDto: UpdateVoterinfoDto) {
    return this.voterinfoService.update(+id, updateVoterinfoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.voterinfoService.remove(+id);
  }

  @Patch(':VoterinfoId/biodata/biodataId')
  setBiodataById(@Param('VoterinfoId') VoterinfoId: string, @Param('biodataId') biodataId: string) {
    return this.voterinfoService. setBiodataById (+VoterinfoId, + biodataId);
  }

  @Delete(':VoterinfoId/biodataId')
  unsetBiodataById(@Param('VoterinfoId') VoterinfoId: string) {
    return this.voterinfoService.unsetBiodataById(+VoterinfoId);
  }

}

