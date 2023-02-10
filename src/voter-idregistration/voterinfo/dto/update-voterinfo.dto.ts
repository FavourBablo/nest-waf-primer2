import { PartialType } from '@nestjs/mapped-types';
import { CreateVoterinfoDto } from './create-voterinfo.dto';

export class UpdateVoterinfoDto extends PartialType(CreateVoterinfoDto) {}
