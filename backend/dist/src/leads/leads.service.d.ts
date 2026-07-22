import { PrismaService } from '../prisma/prisma.service';
import { CreateLeadDto } from './dto/create-lead.dto';
import { UpdateLeadDto } from './dto/update-lead.dto';
import { PaginationDto } from './dto/pagination.dto';
export declare class LeadsService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    create(dto: CreateLeadDto): import("../../generated/prisma/models").Prisma__LeadClient<{
        id: string;
        name: string;
        phone: string;
        email: string | null;
        examInterest: string;
        message: string | null;
        status: string;
        source: string;
        createdAt: Date;
        updatedAt: Date;
    }, never, import("@prisma/client/runtime/client").DefaultArgs, {
        omit: import("../../generated/prisma/internal/prismaNamespace").GlobalOmitConfig | undefined;
    }>;
    findAll(paginationDto: PaginationDto): Promise<{
        data: {
            id: string;
            name: string;
            phone: string;
            email: string | null;
            examInterest: string;
            message: string | null;
            status: string;
            source: string;
            createdAt: Date;
            updatedAt: Date;
        }[];
        total: number;
        page: number;
        limit: number;
    }>;
    findOne(id: string): import("../../generated/prisma/models").Prisma__LeadClient<{
        id: string;
        name: string;
        phone: string;
        email: string | null;
        examInterest: string;
        message: string | null;
        status: string;
        source: string;
        createdAt: Date;
        updatedAt: Date;
    } | null, null, import("@prisma/client/runtime/client").DefaultArgs, {
        omit: import("../../generated/prisma/internal/prismaNamespace").GlobalOmitConfig | undefined;
    }>;
    update(id: string, dto: UpdateLeadDto): import("../../generated/prisma/models").Prisma__LeadClient<{
        id: string;
        name: string;
        phone: string;
        email: string | null;
        examInterest: string;
        message: string | null;
        status: string;
        source: string;
        createdAt: Date;
        updatedAt: Date;
    }, never, import("@prisma/client/runtime/client").DefaultArgs, {
        omit: import("../../generated/prisma/internal/prismaNamespace").GlobalOmitConfig | undefined;
    }>;
    remove(id: string): import("../../generated/prisma/models").Prisma__LeadClient<{
        id: string;
        name: string;
        phone: string;
        email: string | null;
        examInterest: string;
        message: string | null;
        status: string;
        source: string;
        createdAt: Date;
        updatedAt: Date;
    }, never, import("@prisma/client/runtime/client").DefaultArgs, {
        omit: import("../../generated/prisma/internal/prismaNamespace").GlobalOmitConfig | undefined;
    }>;
}
