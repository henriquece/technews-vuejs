import type { ResponseInterceptor } from '@/config/request'
import request from '@/config/request'
import { hackerNewsApiUrl } from '@/config/urls'

export type TopStories = string[]

export const getTopStories = async () =>
  request.get<unknown, ResponseInterceptor<TopStories>>('/topstories.json', {
    baseURL: hackerNewsApiUrl
  })

export const getStory = async (id: string) =>
  request.get<unknown, ResponseInterceptor<TopStories>>(`/item/${id}.json`, {
    baseURL: hackerNewsApiUrl
  })
