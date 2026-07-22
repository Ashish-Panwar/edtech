import { PrismaService } from '../prisma/prisma.service';
import { CreateExamDto } from './dto/create-exam.dto';
import { UpdateExamDto } from './dto/update-exam.dto';
import { PaginationDto } from './dto/pagination.dto';
export declare class ExamsService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    create(createExamDto: CreateExamDto): import("../../generated/prisma/models").Prisma__ExamClient<{
        id: string;
        name: string;
        createdAt: Date;
        updatedAt: Date;
        description: string | null;
        isActive: boolean;
        sortOrder: number;
        fullName: string;
        icon: string | null;
        href: string | null;
        gradient: string | null;
        color: string | null;
    }, never, import("@prisma/client/runtime/client").DefaultArgs, {
        omit: import("../../generated/prisma/internal/prismaNamespace").GlobalOmitConfig | undefined;
    }>;
    findAll(paginationDto: PaginationDto): Promise<{
        data: {
            id: string;
            name: string;
            createdAt: Date;
            updatedAt: Date;
            description: string | null;
            isActive: boolean;
            sortOrder: number;
            fullName: string;
            icon: string | null;
            href: string | null;
            gradient: string | null;
            color: string | null;
        }[];
        total: number;
        page: number;
        limit: number;
    }>;
    findOne(id: string): import("../../generated/prisma/models").Prisma__ExamClient<{
        id: string;
        name: string;
        createdAt: Date;
        updatedAt: Date;
        description: string | null;
        isActive: boolean;
        sortOrder: number;
        fullName: string;
        icon: string | null;
        href: string | null;
        gradient: string | null;
        color: string | null;
    } | null, null, import("@prisma/client/runtime/client").DefaultArgs, {
        omit: import("../../generated/prisma/internal/prismaNamespace").GlobalOmitConfig | undefined;
    }>;
    update(id: string, updateExamDto: UpdateExamDto): import("../../generated/prisma/models").Prisma__ExamClient<{
        id: string;
        name: string;
        createdAt: Date;
        updatedAt: Date;
        description: string | null;
        isActive: boolean;
        sortOrder: number;
        fullName: string;
        icon: string | null;
        href: string | null;
        gradient: string | null;
        color: string | null;
    }, never, import("@prisma/client/runtime/client").DefaultArgs, {
        omit: import("../../generated/prisma/internal/prismaNamespace").GlobalOmitConfig | undefined;
    }>;
    remove(id: string): import("../../generated/prisma/models").Prisma__ExamClient<{
        id: string;
        name: string;
        createdAt: Date;
        updatedAt: Date;
        description: string | null;
        isActive: boolean;
        sortOrder: number;
        fullName: string;
        icon: string | null;
        href: string | null;
        gradient: string | null;
        color: string | null;
    }, never, import("@prisma/client/runtime/client").DefaultArgs, {
        omit: import("../../generated/prisma/internal/prismaNamespace").GlobalOmitConfig | undefined;
    }>;
}
