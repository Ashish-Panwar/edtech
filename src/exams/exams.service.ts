import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateExamDto } from './dto/create-exam.dto';
import { UpdateExamDto } from './dto/update-exam.dto';

@Injectable()
export class ExamsService {
  constructor(private prisma: PrismaService) {}

  create(createExamDto: CreateExamDto) {
    return this.prisma.exam.create({
      data: createExamDto,
    });
  }

  findAll() {
    return this.prisma.exam.findMany({
      orderBy: {
        sortOrder: 'asc',
      },
    });
  }

  findOne(id: string) {
    return this.prisma.exam.findUnique({
      where: { id },
    });
  }

  update(id: string, updateExamDto: UpdateExamDto) {
    return this.prisma.exam.update({
      where: { id },
      data: updateExamDto,
    });
  }

  remove(id: string) {
    return this.prisma.exam.delete({
      where: { id },
    });
  }
}