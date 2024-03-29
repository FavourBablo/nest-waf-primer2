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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Voterinfo = void 0;
const typeorm_1 = require("typeorm");
const biodatum_entity_1 = require("../../biodata/entities/biodatum.entity");
let Voterinfo = class Voterinfo {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Voterinfo.prototype, "voterid", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Voterinfo.prototype, "wardid", void 0);
__decorate([
    (0, typeorm_1.JoinColumn)(),
    (0, typeorm_1.OneToOne)(type => biodatum_entity_1.Biodatum, biodata => biodata.voterinfo, { cascade: true }),
    __metadata("design:type", biodatum_entity_1.Biodatum)
], Voterinfo.prototype, "biodata", void 0);
Voterinfo = __decorate([
    (0, typeorm_1.Entity)()
], Voterinfo);
exports.Voterinfo = Voterinfo;
//# sourceMappingURL=voterinfo.entity.js.map