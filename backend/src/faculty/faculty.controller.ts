import { Controller, Get, Post, Body, Patch, Param, Delete, Query, UploadedFile, UseInterceptors, BadRequestException, Req, UseGuards } from '@nestjs/common';
import { FacultyService } from './faculty.service';
import { CreateFacultyDto } from './dto/create-faculty.dto';
import { UpdateFacultyDto } from './dto/update-faculty.dto';
import { PaginationDto } from './dto/pagination.dto';
import { Roles } from '../auth/decorators/roles.decorator';
import { RolesGuard } from '../auth/guards/roles.guard';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { extname, join } from 'path';
import { existsSync, mkdirSync } from 'fs';
import { ApiTags, ApiConsumes, ApiBearerAuth } from '@nestjs/swagger';
import { Request } from 'express';
type MulterFile = Express.Multer.File;

@ApiTags('faculty')
@ApiBearerAuth()
@UseGuards(RolesGuard)
@Controller('faculty')
export class FacultyController {
  constructor(private readonly facultyService: FacultyService) {}

  @Post()
  @Roles('admin')
  @ApiConsumes('multipart/form-data')
  @UseInterceptors(FileInterceptor('image', {
    storage: diskStorage({
      destination: (req, file, cb) => {
        const uploadDir = './uploads/faculty';
        if (!existsSync(uploadDir)) {
          mkdirSync(uploadDir, { recursive: true });
        }
        cb(null, uploadDir);
      },
      filename: (req, file, cb) => {
        const randomName = Array(32).fill(null).map(() => (Math.round(Math.random() * 16)).toString(16)).join('');
        return cb(null, `${randomName}${extname(file.originalname)}`);
      }
    }),
    fileFilter: (req, file, cb) => {
      if (!file.originalname.match(/\.(jpg|jpeg|png|gif)$/)) {
        return cb(new BadRequestException('Only image files are allowed!'), false);
      }
      cb(null, true);
    }
  }))
  create(@Req() request: Request, @UploadedFile() image: MulterFile) {
    const dto = { ...request.body } as CreateFacultyDto;
    // Add the image filename to the DTO if file was uploaded
    if (image) {
      dto.image = image.filename;
    }
    // Ensure boolean fields are properly typed
    if (dto.isActive !== undefined) {
      dto.isActive = typeof dto.isActive === 'string'
        ? dto.isActive === 'true'
        : !!dto.isActive;
    }
    return this.facultyService.create(dto);
  }

  @Get()
  findAll(@Query() paginationDto: PaginationDto) {
    return this.facultyService.findAll(paginationDto);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.facultyService.findOne(id);
  }

  @Patch(':id')
  @Roles('admin')
  @ApiConsumes('multipart/form-data')
  @UseInterceptors(FileInterceptor('image', {
    storage: diskStorage({
      destination: (req, file, cb) => {
        const uploadDir = './uploads/faculty';
        if (!existsSync(uploadDir)) {
          mkdirSync(uploadDir, { recursive: true });
        }
        cb(null, uploadDir);
      },
      filename: (req, file, cb) => {
        const randomName = Array(32).fill(null).map(() => (Math.round(Math.random() * 16)).toString(16)).join('');
        return cb(null, `${randomName}${extname(file.originalname)}`);
      }
    }),
    fileFilter: (req, file, cb) => {
      if (!file.originalname.match(/\.(jpg|jpeg|png|gif)$/)) {
        return cb(new BadRequestException('Only image files are allowed!'), false);
      }
      cb(null, true);
    }
  }))
  update(@Param('id') id: string, @Req() request: Request, @UploadedFile() image: MulterFile) {
    const dto = { ...request.body } as UpdateFacultyDto;
    // Add the image filename to the DTO if file was uploaded
    if (image) {
      dto.image = image.filename;
    }
    // Ensure boolean fields are properly typed
    if (dto.isActive !== undefined) {
      dto.isActive = typeof dto.isActive === 'string'
        ? dto.isActive === 'true'
        : !!dto.isActive;
    }
    return this.facultyService.update(id, dto);
  }

  @Delete(':id')
  @Roles('admin')
  remove(@Param('id') id: string) {
    return this.facultyService.remove(id);
  }
}