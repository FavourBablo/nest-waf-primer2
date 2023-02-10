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
exports.VoterinfoController = void 0;
const common_1 = require("@nestjs/common");
const voterinfo_service_1 = require("./voterinfo.service");
const create_voterinfo_dto_1 = require("./dto/create-voterinfo.dto");
const update_voterinfo_dto_1 = require("./dto/update-voterinfo.dto");
let VoterinfoController = class VoterinfoController {
    constructor(voterinfoService) {
        this.voterinfoService = voterinfoService;
    }
    create(createVoterinfoDto) {
        return this.voterinfoService.create(createVoterinfoDto);
    }
    findAll() {
        return this.voterinfoService.findAll();
    }
    findOne(id) {
        return this.voterinfoService.findOne(+id);
    }
    update(id, updateVoterinfoDto) {
        return this.voterinfoService.update(+id, updateVoterinfoDto);
    }
    remove(id) {
        return this.voterinfoService.remove(+id);
    }
    setBiodataById(VoterinfoId, biodataId) {
        return this.voterinfoService.setBiodataById(+VoterinfoId, +biodataId);
    }
    unsetBiodataById(VoterinfoId) {
        return this.voterinfoService.unsetBiodataById(+VoterinfoId);
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_voterinfo_dto_1.CreateVoterinfoDto]),
    __metadata("design:returntype", void 0)
], VoterinfoController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], VoterinfoController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], VoterinfoController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_voterinfo_dto_1.UpdateVoterinfoDto]),
    __metadata("design:returntype", void 0)
], VoterinfoController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], VoterinfoController.prototype, "remove", null);
__decorate([
    (0, common_1.Patch)(':VoterinfoId/biodata/biodataId'),
    __param(0, (0, common_1.Param)('VoterinfoId')),
    __param(1, (0, common_1.Param)('biodataId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", void 0)
], VoterinfoController.prototype, "setBiodataById", null);
__decorate([
    (0, common_1.Delete)(':VoterinfoId/biodataId'),
    __param(0, (0, common_1.Param)('VoterinfoId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], VoterinfoController.prototype, "unsetBiodataById", null);
VoterinfoController = __decorate([
    (0, common_1.Controller)('voterinfo'),
    __metadata("design:paramtypes", [voterinfo_service_1.VoterinfoService])
], VoterinfoController);
exports.VoterinfoController = VoterinfoController;
//# sourceMappingURL=voterinfo.controller.js.map