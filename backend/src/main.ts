import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { NestExpressApplication } from '@nestjs/platform-express';
import { join } from 'path';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  app.setGlobalPrefix('api');


  // Set up Swagger documentation
  const config = new DocumentBuilder()
    .setTitle('Premium Coaching Academy API')
    .setDescription('API for Premium Coaching Academy website')
    .setVersion('1.0')
    .addTag('auth', 'Authentication endpoints')
    .addTag('exams', 'Exam categories')
    .addTag('courses', 'Course management')
    .addTag('faculty', 'Faculty information')
    .addTag('testimonials', 'Student success stories')
    .addTag('hero-slides', 'Homepage slider')
    .addTag('stats', 'Statistics')
    .addTag('leads', 'Lead management')
    .addBearerAuth(
      {
        type: 'http',
        scheme: 'bearer',
        bearerFormat: 'JWT',
        name: 'JWT',
        description: 'Enter JWT token',
        in: 'header',
      },
      'JWT-auth', // This name here is important for matching up with @ApiBearerAuth() in your controller!
    )
    .build();
  const document = SwaggerModule.createDocument(app, config);
  
  SwaggerModule.setup('api', app, document);

  // Serve uploaded files statically
  app.useStaticAssets(join(__dirname, '..', 'uploads'), {
    prefix: '/uploads/',
  });

  // Enable CORS for all routes
  app.enableCors({
    origin: ['http://localhost:3000'], // Allow frontend origin
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
    credentials: true,
  });

  // Use global validation pipe
  app.useGlobalPipes(new ValidationPipe({
    whitelist: true,
    transform: true,
  }));

  await app.listen(process.env.PORT ?? 4001);
}
bootstrap();
