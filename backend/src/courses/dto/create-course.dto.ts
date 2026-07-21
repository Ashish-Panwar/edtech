import {
  IsString,
  IsOptional,
  IsNumber,
  IsBoolean,
  IsArray,
  MaxLength,
} from 'class-validator';

export class CreateCourseDto {
  @IsString()
  @MaxLength(200)
  title!: string;

  @IsString()
  @MaxLength(200)
  slug!: string;

  @IsString()
  @MaxLength(50)
  exam!: string;

  @IsOptional()
  @IsString()
  description?: string;

  @IsOptional()
  @IsString()
  @MaxLength(50)
  duration?: string;

  @IsOptional()
  @IsString()
  @MaxLength(50)
  mode?: string;

  @IsOptional()
  @IsNumber()
  price?: number;

  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  highlights?: string[];

  @IsOptional()
  @IsString()
  @MaxLength(500)
  image?: string;

  @IsOptional()
  @IsBoolean()
  isActive?: boolean;
}