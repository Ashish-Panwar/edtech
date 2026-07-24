import { PrismaService } from '../prisma/prisma.service';
import { CreateHeroSlideDto } from './dto/create-hero-slide.dto';
import { UpdateHeroSlideDto } from './dto/update-hero-slide.dto';
import { PaginationDto } from './dto/pagination.dto';
export declare class HeroSlidesService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    create(dto: CreateHeroSlideDto): import(".prisma/client").Prisma.Prisma__HeroSlideClient<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        sortOrder: number;
        isActive: boolean;
        title: string;
        subtitle: string | null;
        description: string | null;
        ctaPrimaryText: string | null;
        ctaPrimaryHref: string | null;
        ctaSecondaryText: string | null;
        ctaSecondaryHref: string | null;
        image: string | null;
    }, never, import("@prisma/client/runtime/client").DefaultArgs, import(".prisma/client").Prisma.PrismaClientOptions>;
    findAll(paginationDto: PaginationDto): Promise<{
        data: {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            sortOrder: number;
            isActive: boolean;
            title: string;
            subtitle: string | null;
            description: string | null;
            ctaPrimaryText: string | null;
            ctaPrimaryHref: string | null;
            ctaSecondaryText: string | null;
            ctaSecondaryHref: string | null;
            image: string | null;
        }[];
        total: number;
        page: number;
        limit: number;
    }>;
    findOne(id: string): import(".prisma/client").Prisma.Prisma__HeroSlideClient<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        sortOrder: number;
        isActive: boolean;
        title: string;
        subtitle: string | null;
        description: string | null;
        ctaPrimaryText: string | null;
        ctaPrimaryHref: string | null;
        ctaSecondaryText: string | null;
        ctaSecondaryHref: string | null;
        image: string | null;
    } | null, null, import("@prisma/client/runtime/client").DefaultArgs, import(".prisma/client").Prisma.PrismaClientOptions>;
    update(id: string, dto: UpdateHeroSlideDto): import(".prisma/client").Prisma.Prisma__HeroSlideClient<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        sortOrder: number;
        isActive: boolean;
        title: string;
        subtitle: string | null;
        description: string | null;
        ctaPrimaryText: string | null;
        ctaPrimaryHref: string | null;
        ctaSecondaryText: string | null;
        ctaSecondaryHref: string | null;
        image: string | null;
    }, never, import("@prisma/client/runtime/client").DefaultArgs, import(".prisma/client").Prisma.PrismaClientOptions>;
    remove(id: string): import(".prisma/client").Prisma.Prisma__HeroSlideClient<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        sortOrder: number;
        isActive: boolean;
        title: string;
        subtitle: string | null;
        description: string | null;
        ctaPrimaryText: string | null;
        ctaPrimaryHref: string | null;
        ctaSecondaryText: string | null;
        ctaSecondaryHref: string | null;
        image: string | null;
    }, never, import("@prisma/client/runtime/client").DefaultArgs, import(".prisma/client").Prisma.PrismaClientOptions>;
}
