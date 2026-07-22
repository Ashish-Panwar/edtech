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
var _a, _b;
Object.defineProperty(exports, "__esModule", { value: true });
exports.FacultyController = void 0;
const common_1 = require("@nestjs/common");
const faculty_service_1 = require("./faculty.service");
const create_faculty_dto_1 = require("./dto/create-faculty.dto");
const pagination_dto_1 = require("./dto/pagination.dto");
const roles_decorator_1 = require("../auth/decorators/roles.decorator");
const roles_guard_1 = require("../auth/guards/roles.guard");
const common_2 = require("@nestjs/common");
const platform_express_1 = require("@nestjs/platform-express");
const multer_1 = require("multer");
const path_1 = require("path");
const fs_1 = require("fs");
const swagger_1 = require("@nestjs/swagger");
let FacultyController = class FacultyController {
    facultyService;
    constructor(facultyService) {
        this.facultyService = facultyService;
    }
    create(createFacultyDto, image) {
        if (image) {
            createFacultyDto.image = image.filename;
        }
        return this.facultyService.create(createFacultyDto);
    }
    findAll(paginationDto) {
        return this.facultyService.findAll(paginationDto);
    }
    findOne(id) {
        return this.facultyService.findOne(id);
    }
    ;
};
exports.FacultyController = FacultyController;
__decorate([
    (0, common_1.Post)(),
    (0, roles_decorator_1.Roles)('admin'),
    (0, swagger_1.ApiConsumes)('multipart/form-data'),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('image', {
        storage: (0, multer_1.diskStorage)({
            destination: (req, file, cb) => {
                const uploadDir = './uploads/faculty';
                if (!(0, fs_1.existsSync)(uploadDir)) {
                    (0, fs_1.mkdirSync)(uploadDir, { recursive: true });
                }
                cb(null, uploadDir);
            },
            filename: (req, file, cb) => {
                const randomName = Array(32).fill(null).map(() => (Math.round(Math.random() * 16)).toString(16)).join('');
                return cb(null, `${randomName}${(0, path_1.extname)(file.originalname)}`);
            }
        }),
        fileFilter: (req, file, cb) => {
            if (!file.originalname.match(/\.(jpg|jpeg|png|gif)$/)) {
                return cb(new common_1.BadRequestException('Only image files are allowed!'), false);
            }
            cb(null, true);
        }
    })),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.UploadedFile)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_faculty_dto_1.CreateFacultyDto, typeof (_b = typeof Express !== "undefined" && (_a = Express.Multer) !== void 0 && _a.File) === "function" ? _b : Object]),
    __metadata("design:returntype", void 0)
], FacultyController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [pagination_dto_1.PaginationDto]),
    __metadata("design:returntype", void 0)
], FacultyController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], FacultyController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    (0, roles_decorator_1.Roles)('admin'),
    (0, swagger_1.ApiConsumes)('multipart/form-data'),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('image', {
        storage: (0, multer_1.diskStorage)({
            destination: (req, {
                storage: (0, multer_1.diskStorage)({
                    destination: (req, file, cb) => {
                        const uploadDir = './uploads/faculty';
                        if (!(0, fs_1.existsSync)(uploadDir)) {
                            (0, fs_1.mkdirSync)(uploadDir, { recursive: true });
                        }
                        cb(null, uploadDir);
                    },
                    filename: (req, file, cb) => {
                        const randomName = Array(32).fill(null).map(() => (Math.round(Math.random() * 16)).toString(16)).join('');
                        return cb(null, `${randomName}${(0, path_1.extname)(file.originalname)}`);
                    }
                }),
                fileFilter: (req, file, cb) => {
                    if (!file.originalname.match(/\.(jpg|jpeg|png|gif)$/)) {
                        return cb(new common_1.BadRequestException('Only image files are allowed!'), false);
                    }
                    cb(null, true);
                }
            })
        }),
        update(id, updateFacultyDto, image) {
            if (image) {
                updateFacultyDto.image = image.filename;
            }
            return this.facultyService.update(id, updateFacultyDto);
        }
    }, (), remove(, id, string), {
        return: this.facultyService.remove(id)
    })),
    __metadata("design:type", Object)
], FacultyController.prototype, "", void 0);
exports.FacultyController = FacultyController = __decorate([
    (0, swagger_1.ApiTags)('faculty'),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_2.UseGuards)(roles_guard_1.RolesGuard),
    (0, common_1.Controller)('faculty'),
    __metadata("design:paramtypes", [faculty_service_1.FacultyService])
], FacultyController);
//# sourceMappingURL=faculty.controller.js.map