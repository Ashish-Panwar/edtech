import { IsString, IsNotEmpty, IsInt, IsOptional, IsBoolean, MaxLength } from 'class-validator';

export class CreateStatDto {
  @IsInt()
  value!: number;

  @IsString()
  @IsNotEmpty()
  @MaxLength(10)
  suffix!: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(100)
  label!: string;

  @IsOptional()
  @IsInt()
  sortOrder?: number;

  @IsOptional()
  @IsBoolean()
  isActive?: boolean;
}