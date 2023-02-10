"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.VoterinfoModule = void 0;
const common_1 = require("@nestjs/common");
const voterinfo_service_1 = require("./voterinfo.service");
const voterinfo_controller_1 = require("./voterinfo.controller");
const voterinfo_entity_1 = require("./entities/voterinfo.entity");
const typeorm_1 = require("@nestjs/typeorm");
const biodatum_entity_1 = require("../biodata/entities/biodatum.entity");
let VoterinfoModule = class VoterinfoModule {
};
VoterinfoModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([voterinfo_entity_1.Voterinfo, biodatum_entity_1.Biodatum])],
        controllers: [voterinfo_controller_1.VoterinfoController],
        providers: [voterinfo_service_1.VoterinfoService]
    })
], VoterinfoModule);
exports.VoterinfoModule = VoterinfoModule;
//# sourceMappingURL=voterinfo.module.js.map