import { PrismaService } from '../prisma/prisma.service';
import { CreateTestimonialDto } from './dto/create-testimonial.dto';
import { UpdateTestimonialDto } from './dto/update-testimonial.dto';
import { PaginationDto } from './dto/pagination.dto';
export declare class TestimonialsService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    create(dto: CreateTestimonialDto): import("generated/prisma/models").Prisma__TestimonialClient<{
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
    update(id: string, dto: UpdateTestimonialDto): import("generated/prisma/models").Prisma__TestimonialClient<{
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
