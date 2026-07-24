import { PrismaService } from '../prisma/prisma.service';
import { CreateLeadDto } from './dto/create-lead.dto';
import { UpdateLeadDto } from './dto/update-lead.dto';
import { PaginationDto } from './dto/pagination.dto';
export declare class LeadsService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    create(dto: CreateLeadDto): import(".prisma/client").Prisma.Prisma__LeadClient<{
        id: string;
        email: string | null;
        name: string;
        createdAt: Date;
        updatedAt: Date;
        phone: string;
        examInterest: string;
        message: string | null;
        status: string;
        source: string;
    }, never, import("@prisma/client/runtime/client").DefaultArgs, import(".prisma/client").Prisma.PrismaClientOptions>;
    findAll(paginationDto: PaginationDto): Promise<{
        data: {
            id: string;
            email: string | null;
            name: string;
            createdAt: Date;
            updatedAt: Date;
            phone: string;
            examInterest: string;
            message: string | null;
            status: string;
            source: string;
        }[];
        total: number;
        page: number;
        limit: number;
    }>;
    findOne(id: string): import(".prisma/client").Prisma.Prisma__LeadClient<{
        id: string;
        email: string | null;
        name: string;
        createdAt: Date;
        updatedAt: Date;
        phone: string;
        examInterest: string;
        message: string | null;
        status: string;
        source: string;
    } | null, null, import("@prisma/client/runtime/client").DefaultArgs, import(".prisma/client").Prisma.PrismaClientOptions>;
    update(id: string, dto: UpdateLeadDto): import(".prisma/client").Prisma.Prisma__LeadClient<{
        id: string;
        email: string | null;
        name: string;
        createdAt: Date;
        updatedAt: Date;
        phone: string;
        examInterest: string;
        message: string | null;
        status: string;
        source: string;
    }, never, import("@prisma/client/runtime/client").DefaultArgs, import(".prisma/client").Prisma.PrismaClientOptions>;
    remove(id: string): import(".prisma/client").Prisma.Prisma__LeadClient<{
        id: string;
        email: string | null;
        name: string;
        createdAt: Date;
        updatedAt: Date;
        phone: string;
        examInterest: string;
        message: string | null;
        status: string;
        source: string;
    }, never, import("@prisma/client/runtime/client").DefaultArgs, import(".prisma/client").Prisma.PrismaClientOptions>;
}
