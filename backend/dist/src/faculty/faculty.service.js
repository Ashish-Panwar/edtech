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
exports.FacultyService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let FacultyService = class FacultyService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    create(createFacultyDto) {
        return this.prisma.faculty.create({ data: createFacultyDto });
    }
    async findAll(paginationDto) {
        const { page, limit, sortBy, sortOrder } = paginationDto;
        const skip = (page - 1) * limit;
        const orderBy = {};
        if (sortBy) {
            orderBy[sortBy] = sortOrder;
        }
        else {
            orderBy['id'] = 'asc';
        }
        const [data, total] = await this.prisma.$transaction([
            this.prisma.faculty.findMany({
                skip,
                take: limit,
                orderBy,
            }),
            this.prisma.faculty.count(),
        ], {
            maxWait: 10000,
            timeout: 20000,
        });
        return {
            data,
            total,
            page,
            limit,
        };
    }
    findOne(id) {
        return this.prisma.faculty.findUnique({ where: { id } });
    }
    update(id, updateFacultyDto) {
        return this.prisma.faculty.update({ where: { id }, data: updateFacultyDto });
    }
    remove(id) {
        return this.prisma.faculty.delete({ where: { id } });
    }
};
exports.FacultyService = FacultyService;
exports.FacultyService = FacultyService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], FacultyService);
//# sourceMappingURL=faculty.service.js.map