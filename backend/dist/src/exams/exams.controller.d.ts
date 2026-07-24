import { ExamsService } from './exams.service';
import { CreateExamDto } from './dto/create-exam.dto';
import { UpdateExamDto } from './dto/update-exam.dto';
import { PaginationDto } from './dto/pagination.dto';
export declare class ExamsController {
    private readonly examsService;
    constructor(examsService: ExamsService);
    create(createExamDto: CreateExamDto): import(".prisma/client").Prisma.Prisma__ExamClient<{
        id: string;
        name: string;
        createdAt: Date;
        updatedAt: Date;
        sortOrder: number;
        isActive: boolean;
        description: string | null;
        fullName: string;
        icon: string | null;
        href: string | null;
        gradient: string | null;
        color: string | null;
    }, never, import("@prisma/client/runtime/client").DefaultArgs, import(".prisma/client").Prisma.PrismaClientOptions>;
    findAll(paginationDto: PaginationDto): Promise<{
        data: {
            id: string;
            name: string;
            createdAt: Date;
            updatedAt: Date;
            sortOrder: number;
            isActive: boolean;
            description: string | null;
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
    findOne(id: string): import(".prisma/client").Prisma.Prisma__ExamClient<{
        id: string;
        name: string;
        createdAt: Date;
        updatedAt: Date;
        sortOrder: number;
        isActive: boolean;
        description: string | null;
        fullName: string;
        icon: string | null;
        href: string | null;
        gradient: string | null;
        color: string | null;
    } | null, null, import("@prisma/client/runtime/client").DefaultArgs, import(".prisma/client").Prisma.PrismaClientOptions>;
    update(id: string, updateExamDto: UpdateExamDto): import(".prisma/client").Prisma.Prisma__ExamClient<{
        id: string;
        name: string;
        createdAt: Date;
        updatedAt: Date;
        sortOrder: number;
        isActive: boolean;
        description: string | null;
        fullName: string;
        icon: string | null;
        href: string | null;
        gradient: string | null;
        color: string | null;
    }, never, import("@prisma/client/runtime/client").DefaultArgs, import(".prisma/client").Prisma.PrismaClientOptions>;
    remove(id: string): import(".prisma/client").Prisma.Prisma__ExamClient<{
        id: string;
        name: string;
        createdAt: Date;
        updatedAt: Date;
        sortOrder: number;
        isActive: boolean;
        description: string | null;
        fullName: string;
        icon: string | null;
        href: string | null;
        gradient: string | null;
        color: string | null;
    }, never, import("@prisma/client/runtime/client").DefaultArgs, import(".prisma/client").Prisma.PrismaClientOptions>;
}
