import { CoursesService } from './courses.service';
import { CreateCourseDto } from './dto/create-course.dto';
import { UpdateCourseDto } from './dto/update-course.dto';
import { PaginationDto } from './dto/pagination.dto';
export declare class CoursesController {
    private readonly coursesService;
    constructor(coursesService: CoursesService);
    create(createCourseDto: CreateCourseDto, image: Express.Multer.File): import("../../generated/prisma/models").Prisma__CourseClient<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
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
    }, never, import("@prisma/client/runtime/client").DefaultArgs, {
        omit: import("../../generated/prisma/internal/prismaNamespace").GlobalOmitConfig | undefined;
    }>;
    findAll(paginationDto: PaginationDto, exam?: string): Promise<{
        data: {
            id: string;
            createdAt: Date;
            updatedAt: Date;
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
        }[];
        total: number;
        page: number;
        limit: number;
    }>;
    findOne(id: string): import("../../generated/prisma/models").Prisma__CourseClient<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
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
    } | null, null, import("@prisma/client/runtime/client").DefaultArgs, {
        omit: import("../../generated/prisma/internal/prismaNamespace").GlobalOmitConfig | undefined;
    }>;
    update(id: string, updateCourseDto: UpdateCourseDto, image: Express.Multer.File): import("../../generated/prisma/models").Prisma__CourseClient<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
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
    }, never, import("@prisma/client/runtime/client").DefaultArgs, {
        omit: import("../../generated/prisma/internal/prismaNamespace").GlobalOmitConfig | undefined;
    }>;
    remove(id: string): import("../../generated/prisma/models").Prisma__CourseClient<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
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
    }, never, import("@prisma/client/runtime/client").DefaultArgs, {
        omit: import("../../generated/prisma/internal/prismaNamespace").GlobalOmitConfig | undefined;
    }>;
}
