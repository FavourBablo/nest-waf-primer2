import { BiodataService } from './biodata.service';
import { CreateBiodatumDto } from './dto/create-biodatum.dto';
import { UpdateBiodatumDto } from './dto/update-biodatum.dto';
export declare class BiodataController {
    private readonly biodataService;
    constructor(biodataService: BiodataService);
    createForm(): void;
    create(createBiodatumDto: CreateBiodatumDto): Promise<import("./entities/biodatum.entity").Biodatum>;
    findAll(): Promise<import("./entities/biodatum.entity").Biodatum[]>;
    findOne(id: string): Promise<import("./entities/biodatum.entity").Biodatum>;
    update(id: string, updateBiodatumDto: UpdateBiodatumDto): Promise<import("typeorm").UpdateResult>;
    remove(id: string): Promise<import("typeorm").DeleteResult>;
}
