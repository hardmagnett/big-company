// Это не vue-плагин. Это просто запускалка для мокапирования.
// Если её подключать как плагин - то мокапирование начинает перехватывать фрагменты сборки от Vite.
// Не придумал другого места куда это положить.

import { setupWorker } from 'msw/browser'
import { handlers } from '@/backend-mocking/handlers'
export const mockServiceWorker = setupWorker(...handlers)

export const unhandledRequestHandler = (req, print)=>{
  let url = new URL(req.url)
  let pathname = url.pathname

  if (!pathname.startsWith('/api/')) {
    return
  }

  print.warning()
}

