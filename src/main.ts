import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger'

async function bootstrap() {
  const PORT = process.env.PORT || 3000;
  const app = await NestFactory.create(AppModule);
  const config = new DocumentBuilder()
    .setTitle('TimerBackend')
    .setDescription("Api documentation")
    .setVersion('1.0.0')
    .addTag('Id_dev')
    .build();
  const documentation = SwaggerModule.createDocument(app, config)
  SwaggerModule.setup('/api/docs', app, documentation)
  await app.listen(PORT);
}

bootstrap();
