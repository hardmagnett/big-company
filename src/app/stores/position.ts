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
    fetchAllPositions() {
      apiMain.fetch({
          method: 'get',
          url: 'positions'
        }
      )
      positionRepo.save([
        { id: 1, title: "IT-Менеджер" },
        { id: 2, title: "Аналитик данных" },
        { id: 3, title: "Backend-разработчик" },
        { id: 4, title: "Frontend-разработчик" },
        { id: 5, title: "IOS-разработчик" },
        { id: 6, title: "Android-разработчик" },
        { id: 7, title: "Программист 1C" },
        { id: 8, title: "UI и UX дизайнер" },
        { id: 9, title: "Администратор безопасности" },
        { id: 10, title: "DevOps-инженер" },
        { id: 11, title: "Специалист техподдержки" },
        { id: 12, title: "Тестировщик" },
        { id: 13, title: "Дата-инженер " },
        { id: 14, title: "Аналитик данных" },
        { id: 15, title: "Системный аналитик" },
      ])
    },
  },
})
