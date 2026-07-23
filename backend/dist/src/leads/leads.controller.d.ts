import { LeadsService } from './leads.service';
import { CreateLeadDto } from './dto/create-lead.dto';
import { UpdateLeadDto } from './dto/update-lead.dto';
import { PaginationDto } from './dto/pagination.dto';
export declare class LeadsController {
    private readonly service;
    constructor(service: LeadsService);
    create(dto: CreateLeadDto): import("generated/prisma/models").Prisma__LeadClient<{
        id: string;
        name: string;
        createdAt: Date;
        updatedAt: Date;
        email: string | null;
        phone: string;
        examInterest: string;
        message: string | null;
        source: string;
        status: string;
    }, never, import("@prisma/client/runtime/client").DefaultArgs, {
        omit: import("generated/prisma/internal/prismaNamespace").GlobalOmitConfig | undefined;
    }>;
    findAll(paginationDto: PaginationDto): Promise<{
        data: {
            id: string;
            name: string;
            createdAt: Date;
            updatedAt: Date;
            email: string | null;
            phone: string;
            examInterest: string;
            message: string | null;
            source: string;
            status: string;
        }[];
        total: number;
        page: number;
        limit: number;
    }>;
    findOne(id: string): import("generated/prisma/models").Prisma__LeadClient<{
        id: string;
        name: string;
        createdAt: Date;
        updatedAt: Date;
        email: string | null;
        phone: string;
        examInterest: string;
        message: string | null;
        source: string;
        status: string;
    } | null, null, import("@prisma/client/runtime/client").DefaultArgs, {
        omit: import("generated/prisma/internal/prismaNamespace").GlobalOmitConfig | undefined;
    }>;
    update(id: string, dto: UpdateLeadDto): import("generated/prisma/models").Prisma__LeadClient<{
        id: string;
        name: string;
        createdAt: Date;
        updatedAt: Date;
        email: string | null;
        phone: string;
        examInterest: string;
        message: string | null;
        source: string;
        status: string;
    }, never, import("@prisma/client/runtime/client").DefaultArgs, {
        omit: import("generated/prisma/internal/prismaNamespace").GlobalOmitConfig | undefined;
    }>;
    remove(id: string): import("generated/prisma/models").Prisma__LeadClient<{
        id: string;
        name: string;
        createdAt: Date;
        updatedAt: Date;
        email: string | null;
        phone: string;
        examInterest: string;
        message: string | null;
        source: string;
        status: string;
    }, never, import("@prisma/client/runtime/client").DefaultArgs, {
        omit: import("generated/prisma/internal/prismaNamespace").GlobalOmitConfig | undefined;
    }>;
}
