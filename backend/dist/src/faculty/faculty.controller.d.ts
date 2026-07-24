import { FacultyService } from './faculty.service';
import { PaginationDto } from './dto/pagination.dto';
import { Request } from 'express';
type MulterFile = Express.Multer.File;
export declare class FacultyController {
    private readonly facultyService;
    constructor(facultyService: FacultyService);
    create(request: Request, image: MulterFile): import(".prisma/client").Prisma.Prisma__FacultyClient<{
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
    update(id: string, request: Request, image: MulterFile): import(".prisma/client").Prisma.Prisma__FacultyClient<{
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
export {};
