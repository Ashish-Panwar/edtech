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
        createdAt: Date;
        updatedAt: Date;
        isActive: boolean;
        image: string | null;
        slug: string;
        subject: string;
        experience: string | null;
        qualification: string | null;
        bio: string | null;
    }, never, import("@prisma/client/runtime/client").DefaultArgs, import(".prisma/client").Prisma.PrismaClientOptions>;
    findAll(paginationDto: PaginationDto): Promise<{
        data: {
            id: string;
            name: string;
            createdAt: Date;
            updatedAt: Date;
            isActive: boolean;
            image: string | null;
            slug: string;
            subject: string;
            experience: string | null;
            qualification: string | null;
            bio: string | null;
        }[];
        total: number;
        page: number;
        limit: number;
    }>;
    findOne(id: string): import(".prisma/client").Prisma.Prisma__FacultyClient<{
        id: string;
        name: string;
        createdAt: Date;
        updatedAt: Date;
        isActive: boolean;
        image: string | null;
        slug: string;
        subject: string;
        experience: string | null;
        qualification: string | null;
        bio: string | null;
    } | null, null, import("@prisma/client/runtime/client").DefaultArgs, import(".prisma/client").Prisma.PrismaClientOptions>;
    update(id: string, request: Request, image: MulterFile): import(".prisma/client").Prisma.Prisma__FacultyClient<{
        id: string;
        name: string;
        createdAt: Date;
        updatedAt: Date;
        isActive: boolean;
        image: string | null;
        slug: string;
        subject: string;
        experience: string | null;
        qualification: string | null;
        bio: string | null;
    }, never, import("@prisma/client/runtime/client").DefaultArgs, import(".prisma/client").Prisma.PrismaClientOptions>;
    remove(id: string): import(".prisma/client").Prisma.Prisma__FacultyClient<{
        id: string;
        name: string;
        createdAt: Date;
        updatedAt: Date;
        isActive: boolean;
        image: string | null;
        slug: string;
        subject: string;
        experience: string | null;
        qualification: string | null;
        bio: string | null;
    }, never, import("@prisma/client/runtime/client").DefaultArgs, import(".prisma/client").Prisma.PrismaClientOptions>;
}
export {};
