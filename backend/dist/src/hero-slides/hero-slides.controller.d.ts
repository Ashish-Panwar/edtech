import { HeroSlidesService } from './hero-slides.service';
import { CreateHeroSlideDto } from './dto/create-hero-slide.dto';
import { UpdateHeroSlideDto } from './dto/update-hero-slide.dto';
export declare class HeroSlidesController {
    private readonly service;
    constructor(service: HeroSlidesService);
    create(dto: CreateHeroSlideDto): import("../../generated/prisma/models").Prisma__HeroSlideClient<{
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
        omit: import("../../generated/prisma/internal/prismaNamespace").GlobalOmitConfig | undefined;
    }>;
    findAll(): import("../../generated/prisma/internal/prismaNamespace").PrismaPromise<{
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
    }[]>;
    findOne(id: string): import("../../generated/prisma/models").Prisma__HeroSlideClient<{
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
        omit: import("../../generated/prisma/internal/prismaNamespace").GlobalOmitConfig | undefined;
    }>;
    update(id: string, dto: UpdateHeroSlideDto): import("../../generated/prisma/models").Prisma__HeroSlideClient<{
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
        omit: import("../../generated/prisma/internal/prismaNamespace").GlobalOmitConfig | undefined;
    }>;
    remove(id: string): import("../../generated/prisma/models").Prisma__HeroSlideClient<{
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
        omit: import("../../generated/prisma/internal/prismaNamespace").GlobalOmitConfig | undefined;
    }>;
}
