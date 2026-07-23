import { PrismaService } from '../prisma/prisma.service';
import { CreateHeroSlideDto } from './dto/create-hero-slide.dto';
import { UpdateHeroSlideDto } from './dto/update-hero-slide.dto';
import { PaginationDto } from './dto/pagination.dto';
export declare class HeroSlidesService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    create(dto: CreateHeroSlideDto): import("generated/prisma/models").Prisma__HeroSlideClient<{
        id: string;
        description: string | null;
        sortOrder: number;
        isActive: boolean;
        createdAt: Date;
        updatedAt: Date;
        title: string;
        image: string | null;
        subtitle: string | null;
        ctaPrimaryText: string | null;
        ctaPrimaryHref: string | null;
        ctaSecondaryText: string | null;
        ctaSecondaryHref: string | null;
    }, never, import("@prisma/client/runtime/client").DefaultArgs, {
        omit: import("generated/prisma/internal/prismaNamespace").GlobalOmitConfig | undefined;
    }>;
    findAll(paginationDto: PaginationDto): Promise<{
        data: {
            id: string;
            description: string | null;
            sortOrder: number;
            isActive: boolean;
            createdAt: Date;
            updatedAt: Date;
            title: string;
            image: string | null;
            subtitle: string | null;
            ctaPrimaryText: string | null;
            ctaPrimaryHref: string | null;
            ctaSecondaryText: string | null;
            ctaSecondaryHref: string | null;
        }[];
        total: number;
        page: number;
        limit: number;
    }>;
    findOne(id: string): import("generated/prisma/models").Prisma__HeroSlideClient<{
        id: string;
        description: string | null;
        sortOrder: number;
        isActive: boolean;
        createdAt: Date;
        updatedAt: Date;
        title: string;
        image: string | null;
        subtitle: string | null;
        ctaPrimaryText: string | null;
        ctaPrimaryHref: string | null;
        ctaSecondaryText: string | null;
        ctaSecondaryHref: string | null;
    } | null, null, import("@prisma/client/runtime/client").DefaultArgs, {
        omit: import("generated/prisma/internal/prismaNamespace").GlobalOmitConfig | undefined;
    }>;
    update(id: string, dto: UpdateHeroSlideDto): import("generated/prisma/models").Prisma__HeroSlideClient<{
        id: string;
        description: string | null;
        sortOrder: number;
        isActive: boolean;
        createdAt: Date;
        updatedAt: Date;
        title: string;
        image: string | null;
        subtitle: string | null;
        ctaPrimaryText: string | null;
        ctaPrimaryHref: string | null;
        ctaSecondaryText: string | null;
        ctaSecondaryHref: string | null;
    }, never, import("@prisma/client/runtime/client").DefaultArgs, {
        omit: import("generated/prisma/internal/prismaNamespace").GlobalOmitConfig | undefined;
    }>;
    remove(id: string): import("generated/prisma/models").Prisma__HeroSlideClient<{
        id: string;
        description: string | null;
        sortOrder: number;
        isActive: boolean;
        createdAt: Date;
        updatedAt: Date;
        title: string;
        image: string | null;
        subtitle: string | null;
        ctaPrimaryText: string | null;
        ctaPrimaryHref: string | null;
        ctaSecondaryText: string | null;
        ctaSecondaryHref: string | null;
    }, never, import("@prisma/client/runtime/client").DefaultArgs, {
        omit: import("generated/prisma/internal/prismaNamespace").GlobalOmitConfig | undefined;
    }>;
}
