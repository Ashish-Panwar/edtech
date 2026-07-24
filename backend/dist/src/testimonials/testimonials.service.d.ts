import { PrismaService } from '../prisma/prisma.service';
import { CreateTestimonialDto } from './dto/create-testimonial.dto';
import { UpdateTestimonialDto } from './dto/update-testimonial.dto';
import { PaginationDto } from './dto/pagination.dto';
export declare class TestimonialsService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    create(dto: CreateTestimonialDto): import(".prisma/client").Prisma.Prisma__TestimonialClient<{
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
    update(id: string, dto: UpdateTestimonialDto): import(".prisma/client").Prisma.Prisma__TestimonialClient<{
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
