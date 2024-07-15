import { setupServer } from 'msw/node'
import { handlers } from '@/backend-mocking/handlers'

export const server = setupServer(...handlers)

server.listen()

export default {
  // install: (app: App) => {
  install: () => {
    server.listen()
  },
};
