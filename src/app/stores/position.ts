import {defineStore} from "pinia";

import apiMain from '@/app/api/apiMain'

import Position from '@/app/models/position/Position'
import { useRepo } from 'pinia-orm'
const positionRepo = useRepo(Position)  // Если будет глючить - сделать его computed/getter. В примерах оно было computed/getter.

import type {IPosition} from '@/app/types/apiEntities';


export const usePositionsStore = defineStore('positionsStore', {
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
      let positions = (dataFromServer as {data: IPosition[]}).data
      positionRepo.save(positions)
    },
  },
})
