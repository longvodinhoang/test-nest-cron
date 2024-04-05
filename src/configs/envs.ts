import * as Joi from 'joi'

export enum EnumEnv {
  DEVELOP = 'development',
  PROD = 'production',
  TEST = 'test',
  PREVIEW = 'preview',
  STAGING = 'staging',
}

export const envValidationSchema = Joi.object({
  NODE_ENV: Joi.string()
    .valid(...Object.values(EnumEnv))
    .default(EnumEnv.DEVELOP),
  PORT: Joi.number().default(3000),
  MONITOR_SERVICE_DISCORD_WEBHOOK_URL: Joi.string().required(),
})
