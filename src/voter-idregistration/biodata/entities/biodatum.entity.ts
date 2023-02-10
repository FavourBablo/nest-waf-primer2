import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Voterinfo } from "../../voterinfo/entities/voterinfo.entity";

@Entity()
export class Biodatum {
    @PrimaryGeneratedColumn()
    id: number;

    @Column() 
    firstName: string;
   
    @Column({nullable: true}) 
    middleName: string;
   
    @Column() 
    lastName: string;

    @Column({nullable: true}) 
    dateOfBirth: Date;

    @Column({nullable: true}) 
    stateOfBirth: string;

    @Column({nullable: true}) 
    townOfBirth: string;
    
    @Column({nullable: true}) 
    residenceaddress: string

    @Column({nullable: true}) 
    primaryphonenumber: number;

    @Column({nullable: true}) 
    profession: string;

    @Column({ default: true }) 
    isActive: boolean;

    @OneToOne(type => Voterinfo, voterinfo => voterinfo.biodata)
    voterinfo: Voterinfo;
    
 }