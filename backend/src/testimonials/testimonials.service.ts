import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateTestimonialDto } from './dto/create-testimonial.dto';
import { UpdateTestimonialDto } from './dto/update-testimonial.dto';
import { PaginationDto } from './dto/pagination.dto';

@Injectable()
export class TestimonialsService {
  constructor(private readonly prisma: PrismaService) {}

  create(dto: CreateTestimonialDto) {
    return this.prisma.testimonial.create({ data: dto });
  }

  async findAll(paginationDto: PaginationDto) {
    const { page, limit } = paginationDto;
    const skip = (page - 1) * limit;

    const [data, total] = await this.prisma.$transaction([
      this.prisma.testimonial.findMany({
        skip,
        take: limit,
      }),
      this.prisma.testimonial.count(),
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
    return this.prisma.testimonial.findUnique({ where: { id } });
  }

  update(id: string, dto: UpdateTestimonialDto) {
    return this.prisma.testimonial.update({ where: { id }, data: dto });
  }

  remove(id: string) {
    return this.prisma.testimonial.delete({ where: { id } });
  }
}