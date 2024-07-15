// todo:: удалить. Через плагины это не работает нормально.
import { setupWorker } from 'msw/browser'
import { handlers } from '@/backend-mocking/handlers'

// export const worker = setupWorker(...handlers)



// worker.listen()

export default {
  // install: (app: App) => {
  install: async () => {

    let worker = setupWorker(...handlers)
    await worker.start()
    
    // await worker.start()
    // await worker.start({ onUnhandledRequest: "bypass" })
  },
};
