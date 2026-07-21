import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateFacultyDto } from './dto/create-faculty.dto';
import { UpdateFacultyDto } from './dto/update-faculty.dto';

@Injectable()
export class FacultyService {
  constructor(private readonly prisma: PrismaService) {}

  create(createFacultyDto: CreateFacultyDto) {
    return this.prisma.faculty.create({ data: createFacultyDto });
  }

  findAll() {
    return this.prisma.faculty.findMany();
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