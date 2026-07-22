import { FacultyService } from './faculty.service';
import { CreateFacultyDto } from './dto/create-faculty.dto';
import { PaginationDto } from './dto/pagination.dto';
export declare class FacultyController {
    private readonly facultyService;
    constructor(facultyService: FacultyService);
    create(createFacultyDto: CreateFacultyDto, image: Express.Multer.File): import("../../generated/prisma/models").Prisma__FacultyClient<{
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
    : any;
}
