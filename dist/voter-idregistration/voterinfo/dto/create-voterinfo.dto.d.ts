import { CreateBiodatumDto } from "../../biodata/dto/create-biodatum.dto";
export declare class CreateVoterinfoDto {
    readonly voterid: number;
    readonly wardid: string;
    readonly biodata: CreateBiodatumDto;
}
