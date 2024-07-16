import {defineStore} from "pinia";

import apiMain from '@/app/api/apiMain'

import Position from '@/app/models/position/Position'
import { useRepo } from 'pinia-orm'
// todo:: возможно это придется сделать computed
const positionRepo = useRepo(Position)

import type {IPosition} from '@/app/types/apiEntities';


export const usePositionsStore = defineStore('counter', {
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
