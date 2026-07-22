"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const throttler_1 = require("@nestjs/throttler");
const throttler_config_1 = require("./throttler/throttler.config");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const prisma_module_1 = require("./prisma/prisma.module");
const exams_module_1 = require("./exams/exams.module");
const courses_module_1 = require("./courses/courses.module");
const faculty_module_1 = require("./faculty/faculty.module");
const testimonials_module_1 = require("./testimonials/testimonials.module");
const hero_slides_module_1 = require("./hero-slides/hero-slides.module");
const stats_module_1 = require("./stats/stats.module");
const leads_module_1 = require("./leads/leads.module");
const auth_module_1 = require("./auth/auth.module");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({ isGlobal: true }),
            throttler_1.ThrottlerModule.forRootAsync({
                useClass: throttler_config_1.ThrottleConfig,
            }),
            prisma_module_1.PrismaModule,
            exams_module_1.ExamsModule,
            courses_module_1.CoursesModule,
            faculty_module_1.FacultyModule,
            testimonials_module_1.TestimonialsModule,
            hero_slides_module_1.HeroSlidesModule,
            stats_module_1.StatsModule,
            leads_module_1.LeadsModule,
            auth_module_1.AuthModule,
        ],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map