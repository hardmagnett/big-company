import {defineStore} from "pinia";
import {computed, ref} from "vue";

import apiMain from '@/app/api/apiMain'

import Position from '@/app/models/position/Position'
import { useRepo } from 'pinia-orm'
// todo:: возможно это придется сделать computed
const positionRepo = useRepo(Position)

export const usePositionsStore = defineStore('counter', {
  // state: () => ({ count: 0, name: 'Eduardo' }),
  getters: {
    allPositions: (state) => ()=>{
      const positions = positionRepo.get()
      return positions
    },
  },
  actions: {
    async fetchAllPositions() {
      let dataFromServer = await apiMain.fetch({
          method: 'get',
          url: 'positions'
        }
      )
      let positions = dataFromServer.data
      console.log(positions); console.log('^...positions:')
      positionRepo.save(positions)
    },
  },
})
