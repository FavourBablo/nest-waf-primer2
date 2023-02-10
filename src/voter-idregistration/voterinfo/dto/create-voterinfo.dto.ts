import { CreateBiodatumDto } from "../../biodata/dto/create-biodatum.dto";

export class CreateVoterinfoDto {
    readonly voterid: number;
    readonly wardid: string;
    readonly biodata: CreateBiodatumDto; 
}

