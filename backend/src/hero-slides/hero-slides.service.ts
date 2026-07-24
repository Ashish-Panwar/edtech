import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateHeroSlideDto } from './dto/create-hero-slide.dto';
import { UpdateHeroSlideDto } from './dto/update-hero-slide.dto';
import { PaginationDto } from './dto/pagination.dto';

@Injectable()
export class HeroSlidesService {
  constructor(private readonly prisma: PrismaService) {}

  create(dto: CreateHeroSlideDto) {
    return this.prisma.heroSlide.create({ data: dto });
  }

  async findAll(paginationDto: PaginationDto) {
    const { page, limit, sortBy, sortOrder } = paginationDto;
    const skip = (page - 1) * limit;

    const orderBy = {};
    if (sortBy) {
      // @ts-ignore
      orderBy[sortBy] = sortOrder;
    } else {
      // default sort by sortOrder ascending
      // @ts-ignore
      orderBy['sortOrder'] = 'asc';
    }

    const [data, total] = await this.prisma.$transaction([
      this.prisma.heroSlide.findMany({
        skip,
        take: limit,
        orderBy,
      }),
      this.prisma.heroSlide.count(),
    ],
      {
        maxWait: 10000,
        timeout: 20000,
      },);

    return {
      data,
      total,
      page,
      limit,
    };
  }

  findOne(id: string) {
    return this.prisma.heroSlide.findUnique({ where: { id } });
  }

  update(id: string, dto: UpdateHeroSlideDto) {
    return this.prisma.heroSlide.update({ where: { id }, data: dto });
  }

  remove(id: string) {
    return this.prisma.heroSlide.delete({ where: { id } });
  }
}