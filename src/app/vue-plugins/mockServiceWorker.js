import { setupWorker } from 'msw/browser'
import { handlers } from '@/backend-mocking/handlers'

// export const worker = setupWorker(...handlers)

// worker.listen()

export default {
  // install: (app: App) => {
  install: () => {
    // worker.listen()
    let worker = setupWorker(...handlers)
    worker.start()
  },
};
