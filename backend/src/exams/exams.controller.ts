import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { ExamsService } from './exams.service';
import { CreateExamDto } from './dto/create-exam.dto';
import { UpdateExamDto } from './dto/update-exam.dto';
import { PaginationDto } from './dto/pagination.dto';
import { Roles } from '../auth/decorators/roles.decorator';
import { RolesGuard } from '../auth/guards/roles.guard';
import { UseGuards } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiQuery, ApiBearerAuth, ApiBody } from '@nestjs/swagger';

@ApiTags('exams')
@ApiBearerAuth('JWT-auth')
@UseGuards(RolesGuard)
@Controller('exams')
export class ExamsController {
  constructor(private readonly examsService: ExamsService) {}

  @Post()
  @Roles('admin')
  @ApiOperation({ summary: 'Create a new exam category' })
  @ApiResponse({ status: 201, description: 'Exam category created successfully' })
  @ApiResponse({ status: 400, description: 'Bad request' })
  @ApiResponse({ status: 403, description: 'Forbidden - Admin only' })
  @ApiBody({ type: CreateExamDto })
  create(@Body() createExamDto: CreateExamDto) {
    return this.examsService.create(createExamDto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all exam categories with pagination and sorting' })
  @ApiResponse({ status: 200, description: 'Return paginated list of exam categories' })
  @ApiQuery({ name: 'page', required: false, description: 'Page number' })
  @ApiQuery({ name: 'limit', required: false, description: 'Items per page' })
  @ApiQuery({ name: 'sortBy', required: false, description: 'Field to sort by' })
  @ApiQuery({ name: 'sortOrder', required: false, description: 'Sort order (asc or desc)' })
  findAll(@Query() paginationDto: PaginationDto) {
    return this.examsService.findAll(paginationDto);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get exam category by ID' })
  @ApiResponse({ status: 200, description: 'Return exam category' })
  @ApiResponse({ status: 404, description: 'Exam category not found' })
  findOne(@Param('id') id: string) {
    return this.examsService.findOne(id);
  }

  @Patch(':id')
  @Roles('admin')
  @ApiOperation({ summary: 'Update exam category by ID' })
  @ApiResponse({ status: 200, description: 'Exam category updated successfully' })
  @ApiResponse({ status: 400, description: 'Bad request' })
  @ApiResponse({ status: 403, description: 'Forbidden - Admin only' })
  @ApiResponse({ status: 404, description: 'Exam category not found' })
  @ApiBody({ type: UpdateExamDto })
  update(@Param('id') id: string, @Body() updateExamDto: UpdateExamDto) {
    return this.examsService.update(id, updateExamDto);
  }

  @Delete(':id')
  @Roles('admin')
  @ApiOperation({ summary: 'Delete exam category by ID' })
  @ApiResponse({ status: 200, description: 'Exam category deleted successfully' })
  @ApiResponse({ status: 403, description: 'Forbidden - Admin only' })
  @ApiResponse({ status: 404, description: 'Exam category not found' })
  remove(@Param('id') id: string) {
    return this.examsService.remove(id);
  }
}
