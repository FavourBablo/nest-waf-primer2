import { Repository } from 'typeorm';
import { Biodatum } from '../biodata/entities/biodatum.entity';
import { CreateVoterinfoDto } from './dto/create-voterinfo.dto';
import { UpdateVoterinfoDto } from './dto/update-voterinfo.dto';
import { Voterinfo } from './entities/voterinfo.entity';
export declare class VoterinfoService {
    private voterRepository;
    private biodataRepository;
    constructor(voterRepository: Repository<Voterinfo>, biodataRepository: Repository<Biodatum>);
    create(createVoterinfoDto: CreateVoterinfoDto): Promise<Voterinfo>;
    findAll(): Promise<Voterinfo[]>;
    findOne(id: any): Promise<Voterinfo>;
    update(id: number, UpdateVoterinfoDto: UpdateVoterinfoDto): Promise<import("typeorm").UpdateResult>;
    remove(id: number): Promise<import("typeorm").DeleteResult>;
    setBiodataById(VoterinfoId: number, biodataId: number): Promise<void>;
    unsetBiodataById(VoterinfoId: number): Promise<void>;
}
