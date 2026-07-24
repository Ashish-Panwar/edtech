import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateStatDto } from './dto/create-stat.dto';
import { UpdateStatDto } from './dto/update-stat.dto';
import { PaginationDto } from './dto/pagination.dto';

@Injectable()
export class StatsService {
  constructor(private readonly prisma: PrismaService) {}

  create(dto: CreateStatDto) {
    return this.prisma.stat.create({ data: dto });
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
      this.prisma.stat.findMany({
        skip,
        take: limit,
        orderBy,
      }),
      this.prisma.stat.count(),
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
    return this.prisma.stat.findUnique({ where: { id } });
  }

  update(id: string, dto: UpdateStatDto) {
    return this.prisma.stat.update({ where: { id }, data: dto });
  }

  remove(id: string) {
    return this.prisma.stat.delete({ where: { id } });
  }
}