import { TestimonialsService } from './testimonials.service';
import { PaginationDto } from './dto/pagination.dto';
import { Request } from 'express';
type MulterFile = Express.Multer.File;
export declare class TestimonialsController {
    private readonly service;
    constructor(service: TestimonialsService);
    create(request: Request, image: MulterFile): import("generated/prisma/models").Prisma__TestimonialClient<{
        id: string;
        isActive: boolean;
        createdAt: Date;
        updatedAt: Date;
        exam: string;
        image: string | null;
        studentName: string;
        rank: string;
        year: number | null;
        story: string | null;
        quote: string | null;
    }, never, import("@prisma/client/runtime/client").DefaultArgs, {
        omit: import("generated/prisma/internal/prismaNamespace").GlobalOmitConfig | undefined;
    }>;
    findAll(paginationDto: PaginationDto): Promise<{
        data: {
            id: string;
            isActive: boolean;
            createdAt: Date;
            updatedAt: Date;
            exam: string;
            image: string | null;
            studentName: string;
            rank: string;
            year: number | null;
            story: string | null;
            quote: string | null;
        }[];
        total: number;
        page: number;
        limit: number;
    }>;
    findOne(id: string): import("generated/prisma/models").Prisma__TestimonialClient<{
        id: string;
        isActive: boolean;
        createdAt: Date;
        updatedAt: Date;
        exam: string;
        image: string | null;
        studentName: string;
        rank: string;
        year: number | null;
        story: string | null;
        quote: string | null;
    } | null, null, import("@prisma/client/runtime/client").DefaultArgs, {
        omit: import("generated/prisma/internal/prismaNamespace").GlobalOmitConfig | undefined;
    }>;
    update(id: string, request: Request, image: MulterFile): import("generated/prisma/models").Prisma__TestimonialClient<{
        id: string;
        isActive: boolean;
        createdAt: Date;
        updatedAt: Date;
        exam: string;
        image: string | null;
        studentName: string;
        rank: string;
        year: number | null;
        story: string | null;
        quote: string | null;
    }, never, import("@prisma/client/runtime/client").DefaultArgs, {
        omit: import("generated/prisma/internal/prismaNamespace").GlobalOmitConfig | undefined;
    }>;
    remove(id: string): import("generated/prisma/models").Prisma__TestimonialClient<{
        id: string;
        isActive: boolean;
        createdAt: Date;
        updatedAt: Date;
        exam: string;
        image: string | null;
        studentName: string;
        rank: string;
        year: number | null;
        story: string | null;
        quote: string | null;
    }, never, import("@prisma/client/runtime/client").DefaultArgs, {
        omit: import("generated/prisma/internal/prismaNamespace").GlobalOmitConfig | undefined;
    }>;
}
export {};
