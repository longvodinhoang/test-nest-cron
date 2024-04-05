import { Injectable } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'
import axios from 'axios'

@Injectable()
export class MonitorService {
  constructor(private readonly configService: ConfigService) {}

  public async sendDiscordWebhook(data: Record<string, unknown>) {
    const webhookUrl = this.configService.get('MONITOR_SERVICE_DISCORD_WEBHOOK_URL')
    return axios({
      url: webhookUrl,
      method: 'POST',
      data,
    })
  }
}
