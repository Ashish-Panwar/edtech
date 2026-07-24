import { PrismaService } from '../prisma/prisma.service';
import { CreateStatDto } from './dto/create-stat.dto';
import { UpdateStatDto } from './dto/update-stat.dto';
import { PaginationDto } from './dto/pagination.dto';
export declare class StatsService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    create(dto: CreateStatDto): import(".prisma/client").Prisma.Prisma__StatClient<{
        sortOrder: number;
        id: string;
        value: number;
        suffix: string;
        label: string;
        isActive: boolean;
        createdAt: Date;
        updatedAt: Date;
    }, never, import("@prisma/client/runtime/client").DefaultArgs, import(".prisma/client").Prisma.PrismaClientOptions>;
    findAll(paginationDto: PaginationDto): Promise<{
        data: {
            sortOrder: number;
            id: string;
            value: number;
            suffix: string;
            label: string;
            isActive: boolean;
            createdAt: Date;
            updatedAt: Date;
        }[];
        total: number;
        page: number;
        limit: number;
    }>;
    findOne(id: string): import(".prisma/client").Prisma.Prisma__StatClient<{
        sortOrder: number;
        id: string;
        value: number;
        suffix: string;
        label: string;
        isActive: boolean;
        createdAt: Date;
        updatedAt: Date;
    } | null, null, import("@prisma/client/runtime/client").DefaultArgs, import(".prisma/client").Prisma.PrismaClientOptions>;
    update(id: string, dto: UpdateStatDto): import(".prisma/client").Prisma.Prisma__StatClient<{
        sortOrder: number;
        id: string;
        value: number;
        suffix: string;
        label: string;
        isActive: boolean;
        createdAt: Date;
        updatedAt: Date;
    }, never, import("@prisma/client/runtime/client").DefaultArgs, import(".prisma/client").Prisma.PrismaClientOptions>;
    remove(id: string): import(".prisma/client").Prisma.Prisma__StatClient<{
        sortOrder: number;
        id: string;
        value: number;
        suffix: string;
        label: string;
        isActive: boolean;
        createdAt: Date;
        updatedAt: Date;
    }, never, import("@prisma/client/runtime/client").DefaultArgs, import(".prisma/client").Prisma.PrismaClientOptions>;
}
