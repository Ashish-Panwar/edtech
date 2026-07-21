import { IsString, IsOptional, IsBoolean, MaxLength } from 'class-validator';

export class CreateFacultyDto {
  @IsString()
  @MaxLength(100)
  name!: string;

  @IsString()
  @MaxLength(200)
  slug!: string;

  @IsString()
  @MaxLength(200)
  subject!: string;

  @IsOptional()
  @IsString()
  @MaxLength(50)
  experience?: string;

  @IsOptional()
  @IsString()
  @MaxLength(200)
  qualification?: string;

  @IsOptional()
  @IsString()
  bio?: string;

  @IsOptional()
  @IsString()
  @MaxLength(500)
  image?: string;

  @IsOptional()
  @IsBoolean()
  isActive?: boolean;
}