import { HeroSlidesService } from './hero-slides.service';
import { CreateHeroSlideDto } from './dto/create-hero-slide.dto';
import { UpdateHeroSlideDto } from './dto/update-hero-slide.dto';
import { PaginationDto } from './dto/pagination.dto';
export declare class HeroSlidesController {
    private readonly service;
    constructor(service: HeroSlidesService);
    create(dto: CreateHeroSlideDto, image: Express.Multer.File): import("../../generated/prisma/models").Prisma__HeroSlideClient<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        title: string;
        description: string | null;
        image: string | null;
        isActive: boolean;
        subtitle: string | null;
        ctaPrimaryText: string | null;
        ctaPrimaryHref: string | null;
        ctaSecondaryText: string | null;
        ctaSecondaryHref: string | null;
        sortOrder: number;
    }, never, import("@prisma/client/runtime/client").DefaultArgs, {
        omit: import("../../generated/prisma/internal/prismaNamespace").GlobalOmitConfig | undefined;
    }>;
    findAll(paginationDto: PaginationDto): Promise<{
        data: {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            title: string;
            description: string | null;
            image: string | null;
            isActive: boolean;
            subtitle: string | null;
            ctaPrimaryText: string | null;
            ctaPrimaryHref: string | null;
            ctaSecondaryText: string | null;
            ctaSecondaryHref: string | null;
            sortOrder: number;
        }[];
        total: number;
        page: number;
        limit: number;
    }>;
    findOne(id: string): import("../../generated/prisma/models").Prisma__HeroSlideClient<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        title: string;
        description: string | null;
        image: string | null;
        isActive: boolean;
        subtitle: string | null;
        ctaPrimaryText: string | null;
        ctaPrimaryHref: string | null;
        ctaSecondaryText: string | null;
        ctaSecondaryHref: string | null;
        sortOrder: number;
    } | null, null, import("@prisma/client/runtime/client").DefaultArgs, {
        omit: import("../../generated/prisma/internal/prismaNamespace").GlobalOmitConfig | undefined;
    }>;
    update(id: string, dto: UpdateHeroSlideDto, image: Express.Multer.File): import("../../generated/prisma/models").Prisma__HeroSlideClient<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        title: string;
        description: string | null;
        image: string | null;
        isActive: boolean;
        subtitle: string | null;
        ctaPrimaryText: string | null;
        ctaPrimaryHref: string | null;
        ctaSecondaryText: string | null;
        ctaSecondaryHref: string | null;
        sortOrder: number;
    }, never, import("@prisma/client/runtime/client").DefaultArgs, {
        omit: import("../../generated/prisma/internal/prismaNamespace").GlobalOmitConfig | undefined;
    }>;
    remove(id: string): import("../../generated/prisma/models").Prisma__HeroSlideClient<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        title: string;
        description: string | null;
        image: string | null;
        isActive: boolean;
        subtitle: string | null;
        ctaPrimaryText: string | null;
        ctaPrimaryHref: string | null;
        ctaSecondaryText: string | null;
        ctaSecondaryHref: string | null;
        sortOrder: number;
    }, never, import("@prisma/client/runtime/client").DefaultArgs, {
        omit: import("../../generated/prisma/internal/prismaNamespace").GlobalOmitConfig | undefined;
    }>;
}
