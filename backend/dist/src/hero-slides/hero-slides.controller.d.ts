import { HeroSlidesService } from './hero-slides.service';
import { UpdateHeroSlideDto } from './dto/update-hero-slide.dto';
import { PaginationDto } from './dto/pagination.dto';
import { Request } from 'express';
type MulterFile = Express.Multer.File;
export declare class HeroSlidesController {
    private readonly service;
    constructor(service: HeroSlidesService);
    create(request: Request, image: MulterFile): import("generated/prisma/models").Prisma__HeroSlideClient<{
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
    update(id: string, dto: UpdateHeroSlideDto, image: MulterFile): import("generated/prisma/models").Prisma__HeroSlideClient<{
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
export {};
