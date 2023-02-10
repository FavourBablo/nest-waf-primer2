import { VoterinfoService } from './voterinfo.service';
import { CreateVoterinfoDto } from './dto/create-voterinfo.dto';
import { UpdateVoterinfoDto } from './dto/update-voterinfo.dto';
export declare class VoterinfoController {
    private readonly voterinfoService;
    constructor(voterinfoService: VoterinfoService);
    create(createVoterinfoDto: CreateVoterinfoDto): Promise<import("./entities/voterinfo.entity").Voterinfo>;
    findAll(): Promise<import("./entities/voterinfo.entity").Voterinfo[]>;
    findOne(id: string): Promise<import("./entities/voterinfo.entity").Voterinfo>;
    update(id: string, updateVoterinfoDto: UpdateVoterinfoDto): Promise<import("typeorm").UpdateResult>;
    remove(id: string): Promise<import("typeorm").DeleteResult>;
    setBiodataById(VoterinfoId: string, biodataId: string): Promise<void>;
    unsetBiodataById(VoterinfoId: string): Promise<void>;
}
