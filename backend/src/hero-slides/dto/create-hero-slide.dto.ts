import { IsString, IsOptional, IsNumber, IsBoolean, MaxLength } from 'class-validator';

export class CreateHeroSlideDto {
  @IsString()
  @MaxLength(200)
  title!: string;

  @IsOptional()
  @IsString()
  @MaxLength(200)
  subtitle?: string;

  @IsOptional()
  @IsString()
  description?: string;

  @IsOptional()
  @IsString()
  @MaxLength(100)
  ctaPrimaryText?: string;

  @IsOptional()
  @IsString()
  @MaxLength(500)
  ctaPrimaryHref?: string;

  @IsOptional()
  @IsString()
  @MaxLength(100)
  ctaSecondaryText?: string;

  @IsOptional()
  @IsString()
  @MaxLength(500)
  ctaSecondaryHref?: string;

  @IsOptional()
  @IsString()
  @MaxLength(500)
  image?: string;

  @IsOptional()
  @IsNumber()
  sortOrder?: number;

  @IsOptional()
  @IsBoolean()
  isActive?: boolean;
}