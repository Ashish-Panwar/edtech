import { PrismaService } from '../prisma/prisma.service';
import { CreateFacultyDto } from './dto/create-faculty.dto';
import { UpdateFacultyDto } from './dto/update-faculty.dto';
import { PaginationDto } from './dto/pagination.dto';
export declare class FacultyService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    create(createFacultyDto: CreateFacultyDto): import("../../generated/prisma/models").Prisma__FacultyClient<{
        id: string;
        name: string;
        createdAt: Date;
        updatedAt: Date;
        slug: string;
        image: string | null;
        isActive: boolean;
        subject: string;
        experience: string | null;
        qualification: string | null;
        bio: string | null;
    }, never, import("@prisma/client/runtime/client").DefaultArgs, {
        omit: import("../../generated/prisma/internal/prismaNamespace").GlobalOmitConfig | undefined;
    }>;
    findAll(paginationDto: PaginationDto): Promise<{
        data: {
            id: string;
            name: string;
            createdAt: Date;
            updatedAt: Date;
            slug: string;
            image: string | null;
            isActive: boolean;
            subject: string;
            experience: string | null;
            qualification: string | null;
            bio: string | null;
        }[];
        total: number;
        page: number;
        limit: number;
    }>;
    findOne(id: string): import("../../generated/prisma/models").Prisma__FacultyClient<{
        id: string;
        name: string;
        createdAt: Date;
        updatedAt: Date;
        slug: string;
        image: string | null;
        isActive: boolean;
        subject: string;
        experience: string | null;
        qualification: string | null;
        bio: string | null;
    } | null, null, import("@prisma/client/runtime/client").DefaultArgs, {
        omit: import("../../generated/prisma/internal/prismaNamespace").GlobalOmitConfig | undefined;
    }>;
    update(id: string, updateFacultyDto: UpdateFacultyDto): import("../../generated/prisma/models").Prisma__FacultyClient<{
        id: string;
        name: string;
        createdAt: Date;
        updatedAt: Date;
        slug: string;
        image: string | null;
        isActive: boolean;
        subject: string;
        experience: string | null;
        qualification: string | null;
        bio: string | null;
    }, never, import("@prisma/client/runtime/client").DefaultArgs, {
        omit: import("../../generated/prisma/internal/prismaNamespace").GlobalOmitConfig | undefined;
    }>;
    remove(id: string): import("../../generated/prisma/models").Prisma__FacultyClient<{
        id: string;
        name: string;
        createdAt: Date;
        updatedAt: Date;
        slug: string;
        image: string | null;
        isActive: boolean;
        subject: string;
        experience: string | null;
        qualification: string | null;
        bio: string | null;
    }, never, import("@prisma/client/runtime/client").DefaultArgs, {
        omit: import("../../generated/prisma/internal/prismaNamespace").GlobalOmitConfig | undefined;
    }>;
}
