import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import helmet from 'helmet'
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger'
import { EnumEnv } from './configs/envs'
import { ValidationPipe } from '@nestjs/common'

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    rawBody: true,
  })
  app.use(helmet())
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      disableErrorMessages: false,
    })
  )

  app.enableCors({
    origin:
      process.env.CORS_ORIGIN_URL == 'all' || process.env.CORS_ORIGIN_URL == '*'
        ? true
        : (process.env.CORS_ORIGIN_URL || '').split(','),
  })

  if (process.env.NODE_ENV === EnumEnv.DEVELOP) {
    const config = new DocumentBuilder()
      .setTitle('VME')
      .setDescription('API description')
      .setVersion('1.0')
      .build()
    const document = SwaggerModule.createDocument(app, config)
    SwaggerModule.setup('api-docs', app, document)
  }

  await app.listen(3000)
}
bootstrap()
