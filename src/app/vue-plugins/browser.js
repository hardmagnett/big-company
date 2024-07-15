import { setupWorker } from 'msw/browser'
import { handlers } from '@/backend-mocking/handlers'
export const worker = setupWorker(...handlers)
