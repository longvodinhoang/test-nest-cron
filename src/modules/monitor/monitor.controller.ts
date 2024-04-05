import { Controller, Get } from '@nestjs/common'
import { MonitorService } from './monitor.service'

@Controller('monitor')
export class MonitorController {
  constructor(private readonly monitorService: MonitorService) {}
  @Get('/send_webhook')
  async sendWebhook() {
    const webhookErr = {
      username: 'Monitor Service',
      content: ['Hello there!'].join(''),
    }
    await this.monitorService.sendDiscordWebhook(webhookErr)
  }
}
