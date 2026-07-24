import { PrismaService } from '../prisma/prisma.service';
import { CreateCourseDto } from './dto/create-course.dto';
import { UpdateCourseDto } from './dto/update-course.dto';
import { PaginationDto } from './dto/pagination.dto';
export declare class CoursesService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    create(createCourseDto: CreateCourseDto): import(".prisma/client").Prisma.Prisma__CourseClient<{
        id: string;
        title: string;
        slug: string;
        exam: string;
        description: string | null;
        duration: string | null;
        mode: string | null;
        price: import("@prisma/client-runtime-utils").Decimal | null;
        highlights: string[];
        image: string | null;
        isActive: boolean;
        createdAt: Date;
        updatedAt: Date;
    }, never, import("@prisma/client/runtime/client").DefaultArgs, import(".prisma/client").Prisma.PrismaClientOptions>;
    findAll(paginationDto: PaginationDto, exam?: string): Promise<{
        data: {
            id: string;
            title: string;
            slug: string;
            exam: string;
            description: string | null;
            duration: string | null;
            mode: string | null;
            price: import("@prisma/client-runtime-utils").Decimal | null;
            highlights: string[];
            image: string | null;
            isActive: boolean;
            createdAt: Date;
            updatedAt: Date;
        }[];
        total: number;
        page: number;
        limit: number;
    }>;
    findOne(id: string): import(".prisma/client").Prisma.Prisma__CourseClient<{
        id: string;
        title: string;
        slug: string;
        exam: string;
        description: string | null;
        duration: string | null;
        mode: string | null;
        price: import("@prisma/client-runtime-utils").Decimal | null;
        highlights: string[];
        image: string | null;
        isActive: boolean;
        createdAt: Date;
        updatedAt: Date;
    } | null, null, import("@prisma/client/runtime/client").DefaultArgs, import(".prisma/client").Prisma.PrismaClientOptions>;
    update(id: string, updateCourseDto: UpdateCourseDto): import(".prisma/client").Prisma.Prisma__CourseClient<{
        id: string;
        title: string;
        slug: string;
        exam: string;
        description: string | null;
        duration: string | null;
        mode: string | null;
        price: import("@prisma/client-runtime-utils").Decimal | null;
        highlights: string[];
        image: string | null;
        isActive: boolean;
        createdAt: Date;
        updatedAt: Date;
    }, never, import("@prisma/client/runtime/client").DefaultArgs, import(".prisma/client").Prisma.PrismaClientOptions>;
    remove(id: string): import(".prisma/client").Prisma.Prisma__CourseClient<{
        id: string;
        title: string;
        slug: string;
        exam: string;
        description: string | null;
        duration: string | null;
        mode: string | null;
        price: import("@prisma/client-runtime-utils").Decimal | null;
        highlights: string[];
        image: string | null;
        isActive: boolean;
        createdAt: Date;
        updatedAt: Date;
    }, never, import("@prisma/client/runtime/client").DefaultArgs, import(".prisma/client").Prisma.PrismaClientOptions>;
}
