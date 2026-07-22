import { PrismaService } from '../prisma/prisma.service';
import { CreateStatDto } from './dto/create-stat.dto';
import { UpdateStatDto } from './dto/update-stat.dto';
import { PaginationDto } from './dto/pagination.dto';
export declare class StatsService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    create(dto: CreateStatDto): import("../../generated/prisma/models").Prisma__StatClient<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        isActive: boolean;
        sortOrder: number;
        value: number;
        suffix: string;
        label: string;
    }, never, import("@prisma/client/runtime/client").DefaultArgs, {
        omit: import("../../generated/prisma/internal/prismaNamespace").GlobalOmitConfig | undefined;
    }>;
    findAll(paginationDto: PaginationDto): Promise<{
        data: {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            isActive: boolean;
            sortOrder: number;
            value: number;
            suffix: string;
            label: string;
        }[];
        total: number;
        page: number;
        limit: number;
    }>;
    findOne(id: string): import("../../generated/prisma/models").Prisma__StatClient<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        isActive: boolean;
        sortOrder: number;
        value: number;
        suffix: string;
        label: string;
    } | null, null, import("@prisma/client/runtime/client").DefaultArgs, {
        omit: import("../../generated/prisma/internal/prismaNamespace").GlobalOmitConfig | undefined;
    }>;
    update(id: string, dto: UpdateStatDto): import("../../generated/prisma/models").Prisma__StatClient<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        isActive: boolean;
        sortOrder: number;
        value: number;
        suffix: string;
        label: string;
    }, never, import("@prisma/client/runtime/client").DefaultArgs, {
        omit: import("../../generated/prisma/internal/prismaNamespace").GlobalOmitConfig | undefined;
    }>;
    remove(id: string): import("../../generated/prisma/models").Prisma__StatClient<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        isActive: boolean;
        sortOrder: number;
        value: number;
        suffix: string;
        label: string;
    }, never, import("@prisma/client/runtime/client").DefaultArgs, {
        omit: import("../../generated/prisma/internal/prismaNamespace").GlobalOmitConfig | undefined;
    }>;
}
