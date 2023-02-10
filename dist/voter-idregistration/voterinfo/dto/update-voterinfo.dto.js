"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateVoterinfoDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_voterinfo_dto_1 = require("./create-voterinfo.dto");
class UpdateVoterinfoDto extends (0, mapped_types_1.PartialType)(create_voterinfo_dto_1.CreateVoterinfoDto) {
}
exports.UpdateVoterinfoDto = UpdateVoterinfoDto;
//# sourceMappingURL=update-voterinfo.dto.js.map