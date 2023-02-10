"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateBiodatumDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_biodatum_dto_1 = require("./create-biodatum.dto");
class UpdateBiodatumDto extends (0, mapped_types_1.PartialType)(create_biodatum_dto_1.CreateBiodatumDto) {
}
exports.UpdateBiodatumDto = UpdateBiodatumDto;
//# sourceMappingURL=update-biodatum.dto.js.map