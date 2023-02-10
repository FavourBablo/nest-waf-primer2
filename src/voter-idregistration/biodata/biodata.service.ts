import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateBiodatumDto } from './dto/create-biodatum.dto';
import { UpdateBiodatumDto } from './dto/update-biodatum.dto';
import { Biodatum } from './entities/biodatum.entity';

@Injectable()
export class BiodataService {
  constructor(
    //inject Biodatum repository for use here in biodataService as if it is part of the class 
    @InjectRepository(Biodatum)
    private usersRepository: Repository<Biodatum>
){}
  async create(createBiodatumDto: CreateBiodatumDto) {
    const newPerson: Biodatum = this.usersRepository.create(createBiodatumDto) 
    return this.usersRepository.save(newPerson);
    //return 'This action adds a new biodatum';
  }

  async findAll() {
      //return `This action returns all biodata`;
      return await this.usersRepository.find();
    }

  async findOne(id: any) {
    //return `This action returns a #${id} biodatum`;
    return await this.usersRepository.findOne(id);
  }

  async update(id: number, updateBiodatumDto: UpdateBiodatumDto) {
    //return `This action updates a #${id} biodatum`;
    return await this.usersRepository.update(id, updateBiodatumDto);
  }

  async remove(id: number) {
    //return `This action removes a #${id} biodatum`;
    return await this.usersRepository.delete(id);

  }
}
