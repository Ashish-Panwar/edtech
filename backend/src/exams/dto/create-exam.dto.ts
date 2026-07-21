import { IsString, IsOptional, IsNumber, IsBoolean, MaxLength } from 'class-validator';

export class CreateExamDto {
  @IsString()
  @MaxLength(50)
  name!: string;

  @IsString()
  @MaxLength(200)
  fullName!: string;

  @IsOptional()
  @IsString()
  description?: string;

  @IsOptional()
  @IsString()
  @MaxLength(50)
  icon?: string;

  @IsOptional()
  @IsString()
  @MaxLength(500)
  href?: string;

  @IsOptional()
  @IsString()
  @MaxLength(100)
  gradient?: string;

  @IsOptional()
  @IsString()
  @MaxLength(50)
  color?: string;

  @IsOptional()
  @IsNumber()
  sortOrder?: number;

  @IsOptional()
  @IsBoolean()
  isActive?: boolean;
}