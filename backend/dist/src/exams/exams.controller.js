"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExamsController = void 0;
const common_1 = require("@nestjs/common");
const exams_service_1 = require("./exams.service");
const create_exam_dto_1 = require("./dto/create-exam.dto");
const update_exam_dto_1 = require("./dto/update-exam.dto");
const pagination_dto_1 = require("./dto/pagination.dto");
const roles_decorator_1 = require("../auth/decorators/roles.decorator");
const roles_guard_1 = require("../auth/guards/roles.guard");
const common_2 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
let ExamsController = class ExamsController {
    examsService;
    constructor(examsService) {
        this.examsService = examsService;
    }
    create(createExamDto) {
        return this.examsService.create(createExamDto);
    }
    findAll(paginationDto) {
        return this.examsService.findAll(paginationDto);
    }
    findOne(id) {
        return this.examsService.findOne(id);
    }
    update(id, updateExamDto) {
        return this.examsService.update(id, updateExamDto);
    }
    remove(id) {
        return this.examsService.remove(id);
    }
};
exports.ExamsController = ExamsController;
__decorate([
    (0, common_1.Post)(),
    (0, roles_decorator_1.Roles)('admin'),
    (0, swagger_1.ApiOperation)({ summary: 'Create a new exam category' }),
    (0, swagger_1.ApiResponse)({ status: 201, description: 'Exam category created successfully' }),
    (0, swagger_1.ApiResponse)({ status: 400, description: 'Bad request' }),
    (0, swagger_1.ApiResponse)({ status: 403, description: 'Forbidden - Admin only' }),
    ApiBody({ type: create_exam_dto_1.CreateExamDto }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_exam_dto_1.CreateExamDto]),
    __metadata("design:returntype", void 0)
], ExamsController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'Get all exam categories with pagination and sorting' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Return paginated list of exam categories' }),
    (0, swagger_1.ApiQuery)({ name: 'page', required: false, description: 'Page number' }),
    (0, swagger_1.ApiQuery)({ name: 'limit', required: false, description: 'Items per page' }),
    (0, swagger_1.ApiQuery)({ name: 'sortBy', required: false, description: 'Field to sort by' }),
    (0, swagger_1.ApiQuery)({ name: 'sortOrder', required: false, description: 'Sort order (asc or desc)' }),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [pagination_dto_1.PaginationDto]),
    __metadata("design:returntype", void 0)
], ExamsController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Get exam category by ID' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Return exam category' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Exam category not found' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ExamsController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    (0, roles_decorator_1.Roles)('admin'),
    (0, swagger_1.ApiOperation)({ summary: 'Update exam category by ID' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Exam category updated successfully' }),
    (0, swagger_1.ApiResponse)({ status: 400, description: 'Bad request' }),
    (0, swagger_1.ApiResponse)({ status: 403, description: 'Forbidden - Admin only' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Exam category not found' }),
    ApiBody({ type: update_exam_dto_1.UpdateExamDto }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_exam_dto_1.UpdateExamDto]),
    __metadata("design:returntype", void 0)
], ExamsController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, roles_decorator_1.Roles)('admin'),
    (0, swagger_1.ApiOperation)({ summary: 'Delete exam category by ID' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Exam category deleted successfully' }),
    (0, swagger_1.ApiResponse)({ status: 403, description: 'Forbidden - Admin only' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Exam category not found' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ExamsController.prototype, "remove", null);
exports.ExamsController = ExamsController = __decorate([
    (0, swagger_1.ApiTags)('exams'),
    (0, swagger_1.ApiBearerAuth)('JWT-auth'),
    (0, common_2.UseGuards)(roles_guard_1.RolesGuard),
    (0, common_1.Controller)('exams'),
    __metadata("design:paramtypes", [exams_service_1.ExamsService])
], ExamsController);
//# sourceMappingURL=exams.controller.js.map