"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.VoterinfoService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const biodatum_entity_1 = require("../biodata/entities/biodatum.entity");
const voterinfo_entity_1 = require("./entities/voterinfo.entity");
let VoterinfoService = class VoterinfoService {
    constructor(voterRepository, biodataRepository) {
        this.voterRepository = voterRepository;
        this.biodataRepository = biodataRepository;
    }
    async create(createVoterinfoDto) {
        const newVoterinfo = this.voterRepository.create(createVoterinfoDto);
        if (createVoterinfoDto.biodata) {
            const newBiodata = this.biodataRepository.create(createVoterinfoDto.biodata);
            const Biodatum = await this.biodataRepository.save(newBiodata);
            newVoterinfo.biodata = Biodatum;
        }
        return this.voterRepository.save(newVoterinfo);
    }
    async findAll() {
        return await this.voterRepository.find({ relations: ['Biodatum'] });
    }
    async findOne(id) {
        return await this.voterRepository.findOne(id);
    }
    async update(id, UpdateVoterinfoDto) {
        return await this.voterRepository.update(id, UpdateVoterinfoDto);
    }
    async remove(id) {
        return await this.voterRepository.delete(id);
    }
    async setBiodataById(VoterinfoId, biodataId) {
        try {
            return await this.voterRepository.createQueryBuilder()
                .relation(voterinfo_entity_1.Voterinfo, "Biodatum")
                .of(VoterinfoId)
                .set(biodataId);
        }
        catch (error) {
            throw new common_1.HttpException({
                status: common_1.HttpStatus.INTERNAL_SERVER_ERROR,
                error: `There was a problem setting user for student: ${error.message}`,
            }, common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    async unsetBiodataById(VoterinfoId) {
        try {
            return await this.voterRepository.createQueryBuilder()
                .relation(voterinfo_entity_1.Voterinfo, "Biodatum")
                .of(VoterinfoId)
                .set(null);
        }
        catch (error) {
            throw new common_1.HttpException({
                status: common_1.HttpStatus.INTERNAL_SERVER_ERROR,
                error: `There was a problem unsetting user for student: ${error.message}`,
            }, common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
};
VoterinfoService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(voterinfo_entity_1.Voterinfo)),
    __param(1, (0, typeorm_1.InjectRepository)(biodatum_entity_1.Biodatum)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository])
], VoterinfoService);
exports.VoterinfoService = VoterinfoService;
//# sourceMappingURL=voterinfo.service.js.map