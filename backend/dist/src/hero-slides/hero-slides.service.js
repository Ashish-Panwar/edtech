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
exports.HeroSlidesService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let HeroSlidesService = class HeroSlidesService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    create(dto) {
        return this.prisma.heroSlide.create({ data: dto });
    }
    async findAll(paginationDto) {
        const { page, limit, sortBy, sortOrder } = paginationDto;
        const skip = (page - 1) * limit;
        const orderBy = {};
        if (sortBy) {
            orderBy[sortBy] = sortOrder;
        }
        else {
            orderBy['sortOrder'] = 'asc';
        }
        const [data, total] = await this.prisma.$transaction([
            this.prisma.heroSlide.findMany({
                skip,
                take: limit,
                orderBy,
            }),
            this.prisma.heroSlide.count(),
        ]);
        return {
            data,
            total,
            page,
            limit,
        };
    }
    findOne(id) {
        return this.prisma.heroSlide.findUnique({ where: { id } });
    }
    update(id, dto) {
        return this.prisma.heroSlide.update({ where: { id }, data: dto });
    }
    remove(id) {
        return this.prisma.heroSlide.delete({ where: { id } });
    }
};
exports.HeroSlidesService = HeroSlidesService;
exports.HeroSlidesService = HeroSlidesService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], HeroSlidesService);
//# sourceMappingURL=hero-slides.service.js.map