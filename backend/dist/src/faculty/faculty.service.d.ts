import { PrismaService } from '../prisma/prisma.service';
import { CreateFacultyDto } from './dto/create-faculty.dto';
import { UpdateFacultyDto } from './dto/update-faculty.dto';
import { PaginationDto } from './dto/pagination.dto';
export declare class FacultyService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    create(createFacultyDto: CreateFacultyDto): import(".prisma/client").Prisma.Prisma__FacultyClient<{
        id: string;
        name: string;
        slug: string;
        subject: string;
        experience: string | null;
        qualification: string | null;
        bio: string | null;
        image: string | null;
        isActive: boolean;
        createdAt: Date;
        updatedAt: Date;
    }, never, import("@prisma/client/runtime/client").DefaultArgs, import(".prisma/client").Prisma.PrismaClientOptions>;
    findAll(paginationDto: PaginationDto): Promise<{
        data: {
            id: string;
            name: string;
            slug: string;
            subject: string;
            experience: string | null;
            qualification: string | null;
            bio: string | null;
            image: string | null;
            isActive: boolean;
            createdAt: Date;
            updatedAt: Date;
        }[];
        total: number;
        page: number;
        limit: number;
    }>;
    findOne(id: string): import(".prisma/client").Prisma.Prisma__FacultyClient<{
        id: string;
        name: string;
        slug: string;
        subject: string;
        experience: string | null;
        qualification: string | null;
        bio: string | null;
        image: string | null;
        isActive: boolean;
        createdAt: Date;
        updatedAt: Date;
    } | null, null, import("@prisma/client/runtime/client").DefaultArgs, import(".prisma/client").Prisma.PrismaClientOptions>;
    update(id: string, updateFacultyDto: UpdateFacultyDto): import(".prisma/client").Prisma.Prisma__FacultyClient<{
        id: string;
        name: string;
        slug: string;
        subject: string;
        experience: string | null;
        qualification: string | null;
        bio: string | null;
        image: string | null;
        isActive: boolean;
        createdAt: Date;
        updatedAt: Date;
    }, never, import("@prisma/client/runtime/client").DefaultArgs, import(".prisma/client").Prisma.PrismaClientOptions>;
    remove(id: string): import(".prisma/client").Prisma.Prisma__FacultyClient<{
        id: string;
        name: string;
        slug: string;
        subject: string;
        experience: string | null;
        qualification: string | null;
        bio: string | null;
        image: string | null;
        isActive: boolean;
        createdAt: Date;
        updatedAt: Date;
    }, never, import("@prisma/client/runtime/client").DefaultArgs, import(".prisma/client").Prisma.PrismaClientOptions>;
}
