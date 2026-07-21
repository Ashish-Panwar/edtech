import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateHeroSlideDto } from './dto/create-hero-slide.dto';
import { UpdateHeroSlideDto } from './dto/update-hero-slide.dto';

@Injectable()
export class HeroSlidesService {
  constructor(private readonly prisma: PrismaService) {}

  create(dto: CreateHeroSlideDto) {
    return this.prisma.heroSlide.create({ data: dto });
  }

  findAll() {
    return this.prisma.heroSlide.findMany({ orderBy: { sortOrder: 'asc' } });
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