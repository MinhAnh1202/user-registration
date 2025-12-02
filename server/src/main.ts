// src/main.ts
import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Danh sách origin được phép
  const whitelist = [
    'http://localhost:5173',
    'http://localhost:5174',
  ];

  // Nếu deploy, set FRONTEND_URL trên Render = https://<your-vercel>.vercel.app
  if (process.env.FRONTEND_URL) {
    whitelist.push(process.env.FRONTEND_URL);
  }

  app.enableCors({
    origin: (origin, callback) => {
      // Cho phép luôn khi origin = undefined (VD: Postman)
      if (!origin || whitelist.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error(`CORS blocked for origin: ${origin}`), false);
      }
    },
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization'],
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
    }),
  );

  const port = process.env.PORT || 3000;
  await app.listen(port, '0.0.0.0');
  console.log(`Server is running on port ${port}`);
}

bootstrap();
