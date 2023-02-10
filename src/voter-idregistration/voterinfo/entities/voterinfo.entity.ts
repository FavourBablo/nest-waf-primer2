import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Biodatum } from "../../biodata/entities/biodatum.entity";

@Entity()
export class Voterinfo {
    @PrimaryGeneratedColumn()
    voterid: number;

    @Column()
    wardid: string;

    @JoinColumn()
    @OneToOne(type => Biodatum, biodata => biodata.voterinfo, { cascade: true }) biodata: Biodatum;
}



