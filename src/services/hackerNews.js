import request from '~/config/request'
import { hackerNewsApiUrl } from '~/config/urls'

export const getTopStoriesUrl = `${hackerNewsApiUrl}/topstories.json`

export const getTopStories = () => request.get(getTopStoriesUrl)

export const getStoryUrl = (id) => `${hackerNewsApiUrl}/item/${id}.json`

export const getStory = (id) => request.get(getStoryUrl(id))
