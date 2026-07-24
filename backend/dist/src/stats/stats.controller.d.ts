import { StatsService } from './stats.service';
import { CreateStatDto } from './dto/create-stat.dto';
import { UpdateStatDto } from './dto/update-stat.dto';
import { PaginationDto } from './dto/pagination.dto';
export declare class StatsController {
    private readonly service;
    constructor(service: StatsService);
    create(dto: CreateStatDto): import(".prisma/client").Prisma.Prisma__StatClient<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        sortOrder: number;
        value: number;
        suffix: string;
        label: string;
        isActive: boolean;
    }, never, import("@prisma/client/runtime/client").DefaultArgs, import(".prisma/client").Prisma.PrismaClientOptions>;
    findAll(paginationDto: PaginationDto): Promise<{
        data: {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            sortOrder: number;
            value: number;
            suffix: string;
            label: string;
            isActive: boolean;
        }[];
        total: number;
        page: number;
        limit: number;
    }>;
    findOne(id: string): import(".prisma/client").Prisma.Prisma__StatClient<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        sortOrder: number;
        value: number;
        suffix: string;
        label: string;
        isActive: boolean;
    } | null, null, import("@prisma/client/runtime/client").DefaultArgs, import(".prisma/client").Prisma.PrismaClientOptions>;
    update(id: string, dto: UpdateStatDto): import(".prisma/client").Prisma.Prisma__StatClient<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        sortOrder: number;
        value: number;
        suffix: string;
        label: string;
        isActive: boolean;
    }, never, import("@prisma/client/runtime/client").DefaultArgs, import(".prisma/client").Prisma.PrismaClientOptions>;
    remove(id: string): import(".prisma/client").Prisma.Prisma__StatClient<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        sortOrder: number;
        value: number;
        suffix: string;
        label: string;
        isActive: boolean;
    }, never, import("@prisma/client/runtime/client").DefaultArgs, import(".prisma/client").Prisma.PrismaClientOptions>;
}
