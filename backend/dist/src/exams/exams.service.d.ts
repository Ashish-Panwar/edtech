import { PrismaService } from '../prisma/prisma.service';
import { CreateExamDto } from './dto/create-exam.dto';
import { UpdateExamDto } from './dto/update-exam.dto';
export declare class ExamsService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    create(createExamDto: CreateExamDto): import("../../generated/prisma/models").Prisma__ExamClient<{
        id: string;
        name: string;
        fullName: string;
        description: string | null;
        icon: string | null;
        href: string | null;
        gradient: string | null;
        color: string | null;
        sortOrder: number;
        isActive: boolean;
        createdAt: Date;
        updatedAt: Date;
    }, never, import("@prisma/client/runtime/client").DefaultArgs, {
        omit: import("../../generated/prisma/internal/prismaNamespace").GlobalOmitConfig | undefined;
    }>;
    findAll(): import("../../generated/prisma/internal/prismaNamespace").PrismaPromise<{
        id: string;
        name: string;
        fullName: string;
        description: string | null;
        icon: string | null;
        href: string | null;
        gradient: string | null;
        color: string | null;
        sortOrder: number;
        isActive: boolean;
        createdAt: Date;
        updatedAt: Date;
    }[]>;
    findOne(id: string): import("../../generated/prisma/models").Prisma__ExamClient<{
        id: string;
        name: string;
        fullName: string;
        description: string | null;
        icon: string | null;
        href: string | null;
        gradient: string | null;
        color: string | null;
        sortOrder: number;
        isActive: boolean;
        createdAt: Date;
        updatedAt: Date;
    } | null, null, import("@prisma/client/runtime/client").DefaultArgs, {
        omit: import("../../generated/prisma/internal/prismaNamespace").GlobalOmitConfig | undefined;
    }>;
    update(id: string, updateExamDto: UpdateExamDto): import("../../generated/prisma/models").Prisma__ExamClient<{
        id: string;
        name: string;
        fullName: string;
        description: string | null;
        icon: string | null;
        href: string | null;
        gradient: string | null;
        color: string | null;
        sortOrder: number;
        isActive: boolean;
        createdAt: Date;
        updatedAt: Date;
    }, never, import("@prisma/client/runtime/client").DefaultArgs, {
        omit: import("../../generated/prisma/internal/prismaNamespace").GlobalOmitConfig | undefined;
    }>;
    remove(id: string): import("../../generated/prisma/models").Prisma__ExamClient<{
        id: string;
        name: string;
        fullName: string;
        description: string | null;
        icon: string | null;
        href: string | null;
        gradient: string | null;
        color: string | null;
        sortOrder: number;
        isActive: boolean;
        createdAt: Date;
        updatedAt: Date;
    }, never, import("@prisma/client/runtime/client").DefaultArgs, {
        omit: import("../../generated/prisma/internal/prismaNamespace").GlobalOmitConfig | undefined;
    }>;
}
