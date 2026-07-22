import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateFacultyDto } from './dto/create-faculty.dto';
import { UpdateFacultyDto } from './dto/update-faculty.dto';
import { PaginationDto } from './dto/pagination.dto';

@Injectable()
export class FacultyService {
  constructor(private readonly prisma: PrismaService) {}

  create(createFacultyDto: CreateFacultyDto) {
    return this.prisma.faculty.create({ data: createFacultyDto });
  }

  async findAll(paginationDto: PaginationDto) {
    const { page, limit, sortBy, sortOrder } = paginationDto;
    const skip = (page - 1) * limit;

    const orderBy = {};
    if (sortBy) {
      // @ts-ignore
      orderBy[sortBy] = sortOrder;
    } else {
      // default sort by id ascending
      // @ts-ignore
      orderBy['id'] = 'asc';
    }

    const [data, total] = await this.prisma.$transaction([
      this.prisma.faculty.findMany({
        skip,
        take: limit,
        orderBy,
      }),
      this.prisma.faculty.count(),
    ]);

    return {
      data,
      total,
      page,
      limit,
    };
  }

  findOne(id: string) {
    return this.prisma.faculty.findUnique({ where: { id } });
  }

  update(id: string, updateFacultyDto: UpdateFacultyDto) {
    return this.prisma.faculty.update({ where: { id }, data: updateFacultyDto });
  }

  remove(id: string) {
    return this.prisma.faculty.delete({ where: { id } });
  }
}