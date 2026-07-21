import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { ExamsModule } from './exams/exams.module';
import { CoursesModule } from './courses/courses.module';
import { FacultyModule } from './faculty/faculty.module';
import { TestimonialsModule } from './testimonials/testimonials.module';
import { HeroSlidesModule } from './hero-slides/hero-slides.module';
import { StatsModule } from './stats/stats.module';
import { LeadsModule } from './leads/leads.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    PrismaModule,
    ExamsModule,
    CoursesModule,
    FacultyModule,
    TestimonialsModule,
    HeroSlidesModule,
    StatsModule,
    LeadsModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}