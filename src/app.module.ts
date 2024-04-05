import { AppController } from './app.controller'
import { CACHE_MANAGER_TTL } from './configs/constants'
import { envValidationSchema } from './configs/envs'
import {
  MonitorModule,
} from './modules'
import { Module, CacheModule } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
@Module({
  imports: [
    CacheModule.register({
      ttl: CACHE_MANAGER_TTL,
      isGlobal: true,
    }),
    ConfigModule.forRoot({
      cache: true,
      validationSchema: envValidationSchema,
      isGlobal: true,
    }),
    MonitorModule,
  ],
  providers: [],
  controllers: [AppController],
})
export class AppModule {}
