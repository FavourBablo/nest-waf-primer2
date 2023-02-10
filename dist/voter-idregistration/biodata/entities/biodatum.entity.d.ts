import { Voterinfo } from "../../voterinfo/entities/voterinfo.entity";
export declare class Biodatum {
    id: number;
    firstName: string;
    middleName: string;
    lastName: string;
    dateOfBirth: Date;
    stateOfBirth: string;
    townOfBirth: string;
    residenceaddress: string;
    primaryphonenumber: number;
    profession: string;
    isActive: boolean;
    voterinfo: Voterinfo;
}
