import { createApp } from 'vue'
import { createPinia } from 'pinia'
import bootstrapALibrary from '@/a-library/bootstrap';


import App from './App.vue'
import router from './router'

import './main.css'


const app = createApp(App)

bootstrapALibrary({
  vueApp: app,
  appName: 'code-example'
})

app.use(createPinia())
app.use(router)

app.mount('#app')

// Такое работает
// function doSomeShit(varName: string, varWithTypeToReturn: string): string
// function doSomeShit(varName: string, varWithTypeToReturn: number): number
// function doSomeShit(varName: string, varWithTypeToReturn: any): any {
//   if (typeof (varWithTypeToReturn )  === 'string') {
//     return 'foo'
//   } else {
//     return 100500
//   }
// }
//
// let someShit1: string
// someShit1 = doSomeShit('sdaf', 'asdf')
// let someShit2: number
// someShit2 = doSomeShit('sdaf', 1)


// ////// Такое тоже работает
// function doSomeShit(varName: string, convertResultToNumber: false): string
// function doSomeShit(varName: string, convertResultToNumber: true): number
// function doSomeShit(varName: string, convertResultToNumber: boolean): any {
//   if (!convertResultToNumber) {
//     return 'foo'
//   } else {
//     return 100500
//   }
// }
// let someShit1: string
// someShit1 = doSomeShit('sdaf', false)
// let someShit2: number
// someShit2 = doSomeShit('sdaf', true)
// }
