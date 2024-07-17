import {defineStore} from "pinia";
import apiMain from "@/app/api/apiMain";
import type {IEmployee} from '@/app/types/apiEntities';

import Employee from '@/app/models/employee/Employee'
import { useRepo } from 'pinia-orm'
const employeeRepo = useRepo(Employee)  // Если будет глючить - сделать его computed/getter. В примерах оно было computed/getter.

export const useEmployeesStore = defineStore('employeesStore', {
  state: () => ({
    paginatedEmployeeIds: [] as number[]
  }),
  actions: {
    async fetchPaginatedEmployees({page = 1}: {page?: number}) {

      let dataFromServer = await apiMain.fetch({
          method: 'get',
          url: 'employees',
          getParams: {
            page: page,
            // todo:: убрать хардкод
            position_ids: [100, 500, 100500]
          }
        }
      ) as {data: IEmployee[]}
      // console.log(dataFromServer); console.log('^...dataFromServer:')
      const fetchedEmployeesIds = dataFromServer.data.map(e=>e.id);
      this.paginatedEmployeeIds = [...this.paginatedEmployeeIds, ...fetchedEmployeesIds]

      employeeRepo.save(dataFromServer.data)

    },
    clearPagination() {
      this.paginatedEmployeeIds = []
    },
  },
  getters: {
    paginatedEmployees: (state) => {
      // Это работает нормально
      // const users = useRepo(User).get()
      const employees = employeeRepo.query()
        // todo:: Отфильровать по массиву id-шников, да ещё и в том-же порядке в котором id-шники. И обьязательно в гисты.
        // .whereIdIn(state.paginatedEmployeeIds)
        // .whereId(state.paginatedEmployeeIds)
        .with('position')
        .get()
      return employees
    },
  },
})
