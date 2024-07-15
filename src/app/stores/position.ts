import {defineStore} from "pinia";
import {computed, ref} from "vue";

import Position from '@/app/models/position/Position'
import { useRepo } from 'pinia-orm'
// todo:: возможно это придется сделать computed
const positionRepo = useRepo(Position)

export const usePositionsStore = defineStore('counter', {
  // state: () => ({ count: 0, name: 'Eduardo' }),
  getters: {
    getAllPositions: (state) => ()=>{
      const positions = positionRepo.get()
      return positions
    },
  },
  actions: {
    fetchAllPositions() {
      positionRepo.save([
        { id: 1, title: 'John Doe' },
        { id: 2, title: 'Jane Doe' }
      ])
    },
  },
})
