"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MovesModule = void 0;
const common_1 = require("@nestjs/common");
const moves_service_1 = require("./moves.service");
const moves_resolver_1 = require("./moves.resolver");
const typeorm_1 = require("@nestjs/typeorm");
const move_entity_1 = require("../entities/move.entity");
const games_module_1 = require("../games/games.module");
let MovesModule = class MovesModule {
};
MovesModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([move_entity_1.Move]), (0, common_1.forwardRef)(() => games_module_1.GamesModule)],
        providers: [moves_resolver_1.MovesResolver, moves_service_1.MovesService],
        exports: [moves_service_1.MovesService],
    })
], MovesModule);
exports.MovesModule = MovesModule;
//# sourceMappingURL=moves.module.js.map