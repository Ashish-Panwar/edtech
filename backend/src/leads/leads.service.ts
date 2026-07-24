import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateLeadDto } from './dto/create-lead.dto';
import { UpdateLeadDto } from './dto/update-lead.dto';
import { PaginationDto } from './dto/pagination.dto';

@Injectable()
export class LeadsService {
  constructor(private readonly prisma: PrismaService) {}

  create(dto: CreateLeadDto) {
    return this.prisma.lead.create({ data: dto });
  }

  async findAll(paginationDto: PaginationDto) {
    const { page, limit, sortBy, sortOrder } = paginationDto;
    const skip = (page - 1) * limit;

    const orderBy = {};
    if (sortBy) {
      // @ts-ignore
      orderBy[sortBy] = sortOrder;
    } else {
      // default sort by createdAt descending
      // @ts-ignore
      orderBy['createdAt'] = 'desc';
    }

    const [data, total] = await this.prisma.$transaction([
      this.prisma.lead.findMany({
        skip,
        take: limit,
        orderBy,
      }),
      this.prisma.lead.count(),
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
    return this.prisma.lead.findUnique({ where: { id } });
  }

  update(id: string, dto: UpdateLeadDto) {
    return this.prisma.lead.update({ where: { id }, data: dto });
  }

  remove(id: string) {
    return this.prisma.lead.delete({ where: { id } });
  }
}