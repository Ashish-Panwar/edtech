import { FacultyService } from './faculty.service';
import { CreateFacultyDto } from './dto/create-faculty.dto';
import { UpdateFacultyDto } from './dto/update-faculty.dto';
export declare class FacultyController {
    private readonly facultyService;
    constructor(facultyService: FacultyService);
    create(createFacultyDto: CreateFacultyDto): import("../../generated/prisma/models").Prisma__FacultyClient<{
        id: string;
        name: string;
        isActive: boolean;
        createdAt: Date;
        updatedAt: Date;
        slug: string;
        image: string | null;
        subject: string;
        experience: string | null;
        qualification: string | null;
        bio: string | null;
    }, never, import("@prisma/client/runtime/client").DefaultArgs, {
        omit: import("../../generated/prisma/internal/prismaNamespace").GlobalOmitConfig | undefined;
    }>;
    findAll(): import("../../generated/prisma/internal/prismaNamespace").PrismaPromise<{
        id: string;
        name: string;
        isActive: boolean;
        createdAt: Date;
        updatedAt: Date;
        slug: string;
        image: string | null;
        subject: string;
        experience: string | null;
        qualification: string | null;
        bio: string | null;
    }[]>;
    findOne(id: string): import("../../generated/prisma/models").Prisma__FacultyClient<{
        id: string;
        name: string;
        isActive: boolean;
        createdAt: Date;
        updatedAt: Date;
        slug: string;
        image: string | null;
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
        isActive: boolean;
        createdAt: Date;
        updatedAt: Date;
        slug: string;
        image: string | null;
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
        isActive: boolean;
        createdAt: Date;
        updatedAt: Date;
        slug: string;
        image: string | null;
        subject: string;
        experience: string | null;
        qualification: string | null;
        bio: string | null;
    }, never, import("@prisma/client/runtime/client").DefaultArgs, {
        omit: import("../../generated/prisma/internal/prismaNamespace").GlobalOmitConfig | undefined;
    }>;
}
