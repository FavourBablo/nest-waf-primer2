import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Biodatum } from '../biodata/entities/biodatum.entity';
import { CreateVoterinfoDto } from './dto/create-voterinfo.dto';
import { UpdateVoterinfoDto } from './dto/update-voterinfo.dto';
import { Voterinfo } from './entities/voterinfo.entity';

@Injectable()
export class VoterinfoService {

  constructor(
    @InjectRepository(Voterinfo)
    private voterRepository: Repository<Voterinfo>,

    @InjectRepository(Biodatum)
    private biodataRepository: Repository<Biodatum>
  ) { }

  async create(createVoterinfoDto: CreateVoterinfoDto) {
    //return 'This action adds a new Voterinfo';
    const newVoterinfo = this.voterRepository.create(createVoterinfoDto);
    //ideally, below should be wrapped in a transaction so that it can roll back if there is error in any of the stages.
    if (createVoterinfoDto.biodata) {
      const newBiodata = this.biodataRepository.create(createVoterinfoDto.biodata);
      const Biodatum: Biodatum = await this.biodataRepository.save(newBiodata);
      newVoterinfo.biodata = Biodatum;
    }
    return this.voterRepository.save(newVoterinfo)
  }

  async findAll() {
    //return `This action returns all Voterinfo`;
    return await this.voterRepository.find({ relations: ['Biodatum'] });
  }

  async findOne(id: any) {
    //return `This action returns a #${id} Voterinfo`;
    return await this.voterRepository.findOne(id);
  }

  async update(id: number, UpdateVoterinfoDto: UpdateVoterinfoDto) {
    //return `This action updates a #${id} Voterinfo`;
    return await this.voterRepository.update(id, UpdateVoterinfoDto);
  }

  async remove(id: number) {
    //return `This action removes a #${id} Voterinfo`;
    return await this.voterRepository.delete(id);
  }

  /* Work on relationships */
  async setBiodataById(VoterinfoId: number, biodataId: number) {
    try {
      return await this.voterRepository.createQueryBuilder()
        .relation(Voterinfo, "Biodatum")
        .of(VoterinfoId)
        .set(biodataId)
    } catch (error) {
      throw new HttpException({
        status: HttpStatus.INTERNAL_SERVER_ERROR,
        error: `There was a problem setting user for student: ${error.message}`,
      }, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  async unsetBiodataById(VoterinfoId: number) {
    try {
      return await this.voterRepository.createQueryBuilder()
        .relation(Voterinfo, "Biodatum")
        .of(VoterinfoId)
        .set(null)
    } catch (error) {
      throw new HttpException({
        status: HttpStatus.INTERNAL_SERVER_ERROR,
        error: `There was a problem unsetting user for student: ${error.message}`,
      }, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}
