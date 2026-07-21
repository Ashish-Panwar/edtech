import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateStatDto } from './dto/create-stat.dto';
import { UpdateStatDto } from './dto/update-stat.dto';

@Injectable()
export class StatsService {
  constructor(private readonly prisma: PrismaService) {}

  create(dto: CreateStatDto) {
    return this.prisma.stat.create({ data: dto });
  }

  findAll() {
    return this.prisma.stat.findMany({ orderBy: { sortOrder: 'asc' } });
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