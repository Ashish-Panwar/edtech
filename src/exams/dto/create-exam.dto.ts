import { PartialType } from '@nestjs/mapped-types';
import { Exam } from '@prisma/client';

export class CreateExamDto {
  name: string;
  fullName: string;
  description?: string;
  icon?: string;
  href?: string;
  gradient?: string;
  color?: string;
  sortOrder: number;
  isActive?: boolean;
}

export class UpdateExamDto extends PartialType(CreateExamDto) {}