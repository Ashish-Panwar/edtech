import { CoursesService } from './courses.service';
import { UpdateCourseDto } from './dto/update-course.dto';
import { PaginationDto } from './dto/pagination.dto';
import { Request } from 'express';
type MulterFile = Express.Multer.File;
export declare class CoursesController {
    private readonly coursesService;
    constructor(coursesService: CoursesService);
    create(request: Request, image: MulterFile): import("generated/prisma/models").Prisma__CourseClient<{
        id: string;
        description: string | null;
        isActive: boolean;
        createdAt: Date;
        updatedAt: Date;
        exam: string;
        title: string;
        slug: string;
        duration: string | null;
        mode: string | null;
        price: import("@prisma/client-runtime-utils").Decimal | null;
        highlights: string[];
        image: string | null;
    }, never, import("@prisma/client/runtime/client").DefaultArgs, {
        omit: import("generated/prisma/internal/prismaNamespace").GlobalOmitConfig | undefined;
    }>;
    findAll(paginationDto: PaginationDto, exam?: string): Promise<{
        data: {
            id: string;
            description: string | null;
            isActive: boolean;
            createdAt: Date;
            updatedAt: Date;
            exam: string;
            title: string;
            slug: string;
            duration: string | null;
            mode: string | null;
            price: import("@prisma/client-runtime-utils").Decimal | null;
            highlights: string[];
            image: string | null;
        }[];
        total: number;
        page: number;
        limit: number;
    }>;
    findOne(id: string): import("generated/prisma/models").Prisma__CourseClient<{
        id: string;
        description: string | null;
        isActive: boolean;
        createdAt: Date;
        updatedAt: Date;
        exam: string;
        title: string;
        slug: string;
        duration: string | null;
        mode: string | null;
        price: import("@prisma/client-runtime-utils").Decimal | null;
        highlights: string[];
        image: string | null;
    } | null, null, import("@prisma/client/runtime/client").DefaultArgs, {
        omit: import("generated/prisma/internal/prismaNamespace").GlobalOmitConfig | undefined;
    }>;
    update(id: string, dto: UpdateCourseDto, image: MulterFile): import("generated/prisma/models").Prisma__CourseClient<{
        id: string;
        description: string | null;
        isActive: boolean;
        createdAt: Date;
        updatedAt: Date;
        exam: string;
        title: string;
        slug: string;
        duration: string | null;
        mode: string | null;
        price: import("@prisma/client-runtime-utils").Decimal | null;
        highlights: string[];
        image: string | null;
    }, never, import("@prisma/client/runtime/client").DefaultArgs, {
        omit: import("generated/prisma/internal/prismaNamespace").GlobalOmitConfig | undefined;
    }>;
    remove(id: string): import("generated/prisma/models").Prisma__CourseClient<{
        id: string;
        description: string | null;
        isActive: boolean;
        createdAt: Date;
        updatedAt: Date;
        exam: string;
        title: string;
        slug: string;
        duration: string | null;
        mode: string | null;
        price: import("@prisma/client-runtime-utils").Decimal | null;
        highlights: string[];
        image: string | null;
    }, never, import("@prisma/client/runtime/client").DefaultArgs, {
        omit: import("generated/prisma/internal/prismaNamespace").GlobalOmitConfig | undefined;
    }>;
}
export {};
