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
exports.BiodataController = void 0;
const common_1 = require("@nestjs/common");
const biodata_service_1 = require("./biodata.service");
const create_biodatum_dto_1 = require("./dto/create-biodatum.dto");
const update_biodatum_dto_1 = require("./dto/update-biodatum.dto");
let BiodataController = class BiodataController {
    constructor(biodataService) {
        this.biodataService = biodataService;
    }
    createForm() {
    }
    create(createBiodatumDto) {
        return this.biodataService.create(createBiodatumDto);
    }
    findAll() {
        return this.biodataService.findAll();
    }
    findOne(id) {
        return this.biodataService.findOne(+id);
    }
    update(id, updateBiodatumDto) {
        return this.biodataService.update(+id, updateBiodatumDto);
    }
    remove(id) {
        return this.biodataService.remove(+id);
    }
};
__decorate([
    (0, common_1.Get)('create'),
    (0, common_1.Render)('biodata/create-user.html'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], BiodataController.prototype, "createForm", null);
__decorate([
    (0, common_1.Post)(),
    (0, common_1.Render)('biodata/create-user.html'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_biodatum_dto_1.CreateBiodatumDto]),
    __metadata("design:returntype", void 0)
], BiodataController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], BiodataController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], BiodataController.prototype, "findOne", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_biodatum_dto_1.UpdateBiodatumDto]),
    __metadata("design:returntype", void 0)
], BiodataController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], BiodataController.prototype, "remove", null);
BiodataController = __decorate([
    (0, common_1.Controller)('biodata'),
    __metadata("design:paramtypes", [biodata_service_1.BiodataService])
], BiodataController);
exports.BiodataController = BiodataController;
//# sourceMappingURL=biodata.controller.js.map