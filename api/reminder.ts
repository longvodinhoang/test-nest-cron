import type { Request, Response } from 'express'
import axios, { isAxiosError } from 'axios'

const BASE_URL = process.env.BASE_URL
// const CRON_SECRET = process.env.CRON_SECRET;
const axiosClient = axios.create({
  // headers: {
  //   Authorization: CRON_SECRET,
  // },
  baseURL: BASE_URL,
})

export default async function handler(request: Request, response: Response) {
  try {
    await axiosClient({
      url: `/api/messages/shift-reminder`,
      method: 'GET',
    })
  } catch (err) {
    console.error(err)
    if (isAxiosError(err)) {
      console.log(err?.message)
      console.log(err?.response)
    }
  }

  return response.json({ success: true })
}
