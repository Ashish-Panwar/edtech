import { IsString, IsOptional, IsNumber, IsBoolean, MaxLength } from 'class-validator';

export class CreateTestimonialDto {
  @IsString()
  @MaxLength(100)
  studentName!: string;

  @IsString()
  @MaxLength(50)
  exam!: string;

  @IsString()
  @MaxLength(50)
  rank!: string;

  @IsOptional()
  @IsNumber()
  year?: number;

  @IsOptional()
  @IsString()
  story?: string;

  @IsOptional()
  @IsString()
  quote?: string;

  @IsOptional()
  @IsString()
  @MaxLength(500)
  image?: string;

  @IsOptional()
  @IsBoolean()
  isActive?: boolean;
}