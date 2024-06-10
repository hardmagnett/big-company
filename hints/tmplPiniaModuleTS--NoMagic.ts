/* eslint-disable */
import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
export const useMyShedStore = defineStore('MyShed', () => {
  // state variable
  const count = ref(0)

  // action
  function increment() {
    count.value++
  }

  // getter без параметров
  const doubleCount = computed(() => count.value * 2)

  // параметрический getter
  const multiplyCount = computed((state) => {
    return (myMultiplier: number) => {
      return count.value * myMultiplier
    }
  })

  // Все публичные state variables, actions и getters должны быть экспортированы
  return {
    count,
    doubleCount,
    increment
  }
})
/* eslint-enable */
