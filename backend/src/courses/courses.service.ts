import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateCourseDto } from './dto/create-course.dto';
import { UpdateCourseDto } from './dto/update-course.dto';
import { PaginationDto } from './dto/pagination.dto';

@Injectable()
export class CoursesService {
  constructor(private readonly prisma: PrismaService) {}

  create(createCourseDto: CreateCourseDto) {
    return this.prisma.course.create({ data: createCourseDto });
  }

  async findAll(paginationDto: PaginationDto, exam?: string) {
    const { page, limit, sortBy, sortOrder } = paginationDto;
    const skip = (page - 1) * limit;

    const where = exam ? { exam } : {};

    let orderBy = {};
    if (sortBy) {
      orderBy = { [sortBy]: sortOrder };
    }

    const [data, total] = await this.prisma.$transaction([
      this.prisma.course.findMany({
        where,
        skip,
        take: limit,
        orderBy: sortBy ? orderBy : undefined,
      }),
      this.prisma.course.count({ where }),
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
    return this.prisma.course.findUnique({ where: { id } });
  }

  update(id: string, updateCourseDto: UpdateCourseDto) {
    return this.prisma.course.update({ where: { id }, data: updateCourseDto });
  }

  remove(id: string) {
    return this.prisma.course.delete({ where: { id } });
  }
}