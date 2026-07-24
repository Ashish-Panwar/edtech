import { PrismaService } from '../prisma/prisma.service';
import { CreateHeroSlideDto } from './dto/create-hero-slide.dto';
import { UpdateHeroSlideDto } from './dto/update-hero-slide.dto';
import { PaginationDto } from './dto/pagination.dto';
export declare class HeroSlidesService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    create(dto: CreateHeroSlideDto): import(".prisma/client").Prisma.Prisma__HeroSlideClient<{
        sortOrder: number;
        id: string;
        title: string;
        subtitle: string | null;
        description: string | null;
        ctaPrimaryText: string | null;
        ctaPrimaryHref: string | null;
        ctaSecondaryText: string | null;
        ctaSecondaryHref: string | null;
        image: string | null;
        isActive: boolean;
        createdAt: Date;
        updatedAt: Date;
    }, never, import("@prisma/client/runtime/client").DefaultArgs, import(".prisma/client").Prisma.PrismaClientOptions>;
    findAll(paginationDto: PaginationDto): Promise<{
        data: {
            sortOrder: number;
            id: string;
            title: string;
            subtitle: string | null;
            description: string | null;
            ctaPrimaryText: string | null;
            ctaPrimaryHref: string | null;
            ctaSecondaryText: string | null;
            ctaSecondaryHref: string | null;
            image: string | null;
            isActive: boolean;
            createdAt: Date;
            updatedAt: Date;
        }[];
        total: number;
        page: number;
        limit: number;
    }>;
    findOne(id: string): import(".prisma/client").Prisma.Prisma__HeroSlideClient<{
        sortOrder: number;
        id: string;
        title: string;
        subtitle: string | null;
        description: string | null;
        ctaPrimaryText: string | null;
        ctaPrimaryHref: string | null;
        ctaSecondaryText: string | null;
        ctaSecondaryHref: string | null;
        image: string | null;
        isActive: boolean;
        createdAt: Date;
        updatedAt: Date;
    } | null, null, import("@prisma/client/runtime/client").DefaultArgs, import(".prisma/client").Prisma.PrismaClientOptions>;
    update(id: string, dto: UpdateHeroSlideDto): import(".prisma/client").Prisma.Prisma__HeroSlideClient<{
        sortOrder: number;
        id: string;
        title: string;
        subtitle: string | null;
        description: string | null;
        ctaPrimaryText: string | null;
        ctaPrimaryHref: string | null;
        ctaSecondaryText: string | null;
        ctaSecondaryHref: string | null;
        image: string | null;
        isActive: boolean;
        createdAt: Date;
        updatedAt: Date;
    }, never, import("@prisma/client/runtime/client").DefaultArgs, import(".prisma/client").Prisma.PrismaClientOptions>;
    remove(id: string): import(".prisma/client").Prisma.Prisma__HeroSlideClient<{
        sortOrder: number;
        id: string;
        title: string;
        subtitle: string | null;
        description: string | null;
        ctaPrimaryText: string | null;
        ctaPrimaryHref: string | null;
        ctaSecondaryText: string | null;
        ctaSecondaryHref: string | null;
        image: string | null;
        isActive: boolean;
        createdAt: Date;
        updatedAt: Date;
    }, never, import("@prisma/client/runtime/client").DefaultArgs, import(".prisma/client").Prisma.PrismaClientOptions>;
}
