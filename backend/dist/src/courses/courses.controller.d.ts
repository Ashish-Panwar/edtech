import { CoursesService } from './courses.service';
import { CreateCourseDto } from './dto/create-course.dto';
import { UpdateCourseDto } from './dto/update-course.dto';
export declare class CoursesController {
    private readonly coursesService;
    constructor(coursesService: CoursesService);
    create(createCourseDto: CreateCourseDto): import("../../generated/prisma/models").Prisma__CourseClient<{
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
        omit: import("../../generated/prisma/internal/prismaNamespace").GlobalOmitConfig | undefined;
    }>;
    findAll(): import("../../generated/prisma/internal/prismaNamespace").PrismaPromise<{
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
    }[]>;
    findOne(id: string): import("../../generated/prisma/models").Prisma__CourseClient<{
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
        omit: import("../../generated/prisma/internal/prismaNamespace").GlobalOmitConfig | undefined;
    }>;
    update(id: string, updateCourseDto: UpdateCourseDto): import("../../generated/prisma/models").Prisma__CourseClient<{
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
        omit: import("../../generated/prisma/internal/prismaNamespace").GlobalOmitConfig | undefined;
    }>;
    remove(id: string): import("../../generated/prisma/models").Prisma__CourseClient<{
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
        omit: import("../../generated/prisma/internal/prismaNamespace").GlobalOmitConfig | undefined;
    }>;
}
