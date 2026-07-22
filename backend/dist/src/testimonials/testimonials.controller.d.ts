import { TestimonialsService } from './testimonials.service';
import { CreateTestimonialDto } from './dto/create-testimonial.dto';
import { UpdateTestimonialDto } from './dto/update-testimonial.dto';
import { PaginationDto } from './dto/pagination.dto';
export declare class TestimonialsController {
    private readonly service;
    constructor(service: TestimonialsService);
    create(dto: CreateTestimonialDto, image: Express.Multer.File): import("../../generated/prisma/models").Prisma__TestimonialClient<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        exam: string;
        image: string | null;
        isActive: boolean;
        studentName: string;
        rank: string;
        year: number | null;
        story: string | null;
        quote: string | null;
    }, never, import("@prisma/client/runtime/client").DefaultArgs, {
        omit: import("../../generated/prisma/internal/prismaNamespace").GlobalOmitConfig | undefined;
    }>;
    findAll(paginationDto: PaginationDto): Promise<{
        data: {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            exam: string;
            image: string | null;
            isActive: boolean;
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
    findOne(id: string): import("../../generated/prisma/models").Prisma__TestimonialClient<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        exam: string;
        image: string | null;
        isActive: boolean;
        studentName: string;
        rank: string;
        year: number | null;
        story: string | null;
        quote: string | null;
    } | null, null, import("@prisma/client/runtime/client").DefaultArgs, {
        omit: import("../../generated/prisma/internal/prismaNamespace").GlobalOmitConfig | undefined;
    }>;
    update(id: string, dto: UpdateTestimonialDto, image: Express.Multer.File): import("../../generated/prisma/models").Prisma__TestimonialClient<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        exam: string;
        image: string | null;
        isActive: boolean;
        studentName: string;
        rank: string;
        year: number | null;
        story: string | null;
        quote: string | null;
    }, never, import("@prisma/client/runtime/client").DefaultArgs, {
        omit: import("../../generated/prisma/internal/prismaNamespace").GlobalOmitConfig | undefined;
    }>;
    remove(id: string): import("../../generated/prisma/models").Prisma__TestimonialClient<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        exam: string;
        image: string | null;
        isActive: boolean;
        studentName: string;
        rank: string;
        year: number | null;
        story: string | null;
        quote: string | null;
    }, never, import("@prisma/client/runtime/client").DefaultArgs, {
        omit: import("../../generated/prisma/internal/prismaNamespace").GlobalOmitConfig | undefined;
    }>;
}
