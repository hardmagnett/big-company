import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

/**
 * Похоже этот store я делал чтобы опробовать хранилище pinia.
 * Нужно:
 * - сделать лайв-теплейт для store
 * - подумать как переместить этот store в другую папку.
 * - Разобраться для чего нужна pinia, если весь store делается на основе ref и computed.
 *   Записать это в гисты по Pinia
 *   - Вроде-бы чтобы могло работать с SSR
 *   - Нужна для PiniaORM
 */
export const useCounterStore = defineStore('counter', () => {
  const count = ref(0)
  const doubleCount = computed(() => count.value * 2)
  function increment() {
    count.value++
  }

  return { count, doubleCount, increment }
})
