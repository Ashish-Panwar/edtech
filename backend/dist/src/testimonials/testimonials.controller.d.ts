import { TestimonialsService } from './testimonials.service';
import { PaginationDto } from './dto/pagination.dto';
import { Request } from 'express';
type MulterFile = Express.Multer.File;
export declare class TestimonialsController {
    private readonly service;
    constructor(service: TestimonialsService);
    create(request: Request, image: MulterFile): import(".prisma/client").Prisma.Prisma__TestimonialClient<{
        exam: string;
        id: string;
        createdAt: Date;
        updatedAt: Date;
        isActive: boolean;
        image: string | null;
        studentName: string;
        rank: string;
        year: number | null;
        story: string | null;
        quote: string | null;
    }, never, import("@prisma/client/runtime/client").DefaultArgs, import(".prisma/client").Prisma.PrismaClientOptions>;
    findAll(paginationDto: PaginationDto): Promise<{
        data: {
            exam: string;
            id: string;
            createdAt: Date;
            updatedAt: Date;
            isActive: boolean;
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
    findOne(id: string): import(".prisma/client").Prisma.Prisma__TestimonialClient<{
        exam: string;
        id: string;
        createdAt: Date;
        updatedAt: Date;
        isActive: boolean;
        image: string | null;
        studentName: string;
        rank: string;
        year: number | null;
        story: string | null;
        quote: string | null;
    } | null, null, import("@prisma/client/runtime/client").DefaultArgs, import(".prisma/client").Prisma.PrismaClientOptions>;
    update(id: string, request: Request, image: MulterFile): import(".prisma/client").Prisma.Prisma__TestimonialClient<{
        exam: string;
        id: string;
        createdAt: Date;
        updatedAt: Date;
        isActive: boolean;
        image: string | null;
        studentName: string;
        rank: string;
        year: number | null;
        story: string | null;
        quote: string | null;
    }, never, import("@prisma/client/runtime/client").DefaultArgs, import(".prisma/client").Prisma.PrismaClientOptions>;
    remove(id: string): import(".prisma/client").Prisma.Prisma__TestimonialClient<{
        exam: string;
        id: string;
        createdAt: Date;
        updatedAt: Date;
        isActive: boolean;
        image: string | null;
        studentName: string;
        rank: string;
        year: number | null;
        story: string | null;
        quote: string | null;
    }, never, import("@prisma/client/runtime/client").DefaultArgs, import(".prisma/client").Prisma.PrismaClientOptions>;
}
export {};
