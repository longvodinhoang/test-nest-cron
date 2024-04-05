import { Module } from '@nestjs/common'
import { MonitorService } from './monitor.service'
import { MonitorController } from './monitor.controller'

@Module({
  providers: [MonitorService],
  exports: [MonitorService],
  controllers: [MonitorController],
})
export class MonitorModule {}
