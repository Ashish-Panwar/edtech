import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateExamDto } from './dto/create-exam.dto';
import { UpdateExamDto } from './dto/update-exam.dto';
import { PaginationDto } from './dto/pagination.dto';

@Injectable()
export class ExamsService {
  constructor(private readonly prisma: PrismaService) {}

  create(createExamDto: CreateExamDto) {
    return this.prisma.exam.create({ data: createExamDto });
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
    const [data, total] = await this.prisma.$transaction(
      [
        this.prisma.exam.findMany({
          skip,
          take: limit,
          orderBy,
        }),
        this.prisma.exam.count(),
      ],
      {
        maxWait: 15000,
        timeout: 30000,
      },
    );
    return {
      data,
      total,
      page,
      limit,
    };
  }

  findOne(id: string) {
    return this.prisma.exam.findUnique({ where: { id } });
  }

  update(id: string, updateExamDto: UpdateExamDto) {
    return this.prisma.exam.update({ where: { id }, data: updateExamDto });
  }

  remove(id: string) {
    return this.prisma.exam.delete({ where: { id } });
  }
}