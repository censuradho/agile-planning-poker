import {
  getAnalytics,
  logEvent as rootLogEvent
} from 'firebase/analytics'
import { firebase } from 'lib/firebase'

export const analytics = getAnalytics(firebase)

export const logEvent = (eventName: string, options?: Record<string, any>) => {
  rootLogEvent(analytics, eventName, options)
}
