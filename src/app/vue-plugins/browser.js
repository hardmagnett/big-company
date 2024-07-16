import { setupWorker } from 'msw/browser'
import { handlers } from '@/backend-mocking/handlers'
export const worker = setupWorker(...handlers)

export const unhandledRequestHandler = (req, print)=>{
  let url = new URL(req.url)
  let pathname = url.pathname

  if (!pathname.startsWith('/api/')) {
    return
  }

  print.warning()
}
