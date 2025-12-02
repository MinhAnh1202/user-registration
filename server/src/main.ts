// src/main.ts
import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Dynamic CORS configuration for production
  const allowedOrigins = process.env.FRONTEND_URL 
    ? [process.env.FRONTEND_URL]
    : ['http://localhost:5173', 'http://localhost:5174'];

  app.enableCors({
    origin: allowedOrigins,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH'],
    credentials: true,
  });

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      transform: true,
      forbidNonWhitelisted: true,
      transformOptions: {
        enableImplicitConversion: true,
      },
    })
  );

  const port = process.env.PORT || 3000;
  await app.listen(port, '0.0.0.0'); // Listen on all interfaces for deployment
  console.log(`Server is running on port ${port}`);
}
bootstrap();
