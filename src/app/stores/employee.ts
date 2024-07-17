import {defineStore} from "pinia";
import apiMain from "@/app/api/apiMain";
import type {IEmployee} from '@/app/types/apiEntities';

import Employee from '@/app/models/employee/Employee'
import { useRepo } from 'pinia-orm'
const employeeRepo = useRepo(Employee)  // Если будет глючить - сделать его computed/getter. В примерах оно было computed/getter.

export const useEmployeesStore = defineStore('employeesStore', {
  state: () => ({
    paginatedEmployeeIds: [] as number[],
    totalPaginatedEmployeesQty: 0 // Сколько окажется, если паджинацию докрутить до конца.
  }),
  actions: {
    async fetchPaginatedEmployees({page = 1}: {page?: number}) {

      const dataFromServer = await apiMain.fetch({
          method: 'get',
          url: 'employees',
          getParams: {
            page: page,
            // todo:: убрать хардкод
            position_ids: [100, 500, 100500]
          }
        }
      ) as {data: IEmployee[], total_count: number}
      const fetchedEmployeesIds = dataFromServer.data.map(e=>e.id);
      this.paginatedEmployeeIds = [...this.paginatedEmployeeIds, ...fetchedEmployeesIds]
      this.totalPaginatedEmployeesQty = dataFromServer.total_count

      employeeRepo.save(dataFromServer.data)

    },
    clearPagination() {
      this.paginatedEmployeeIds = []
    },
  },
  getters: {
    paginatedEmployees: (state) => {
      const employees = employeeRepo.query()
        .whereId(state.paginatedEmployeeIds)
        .with('position')
        .get()
      return employees
    },
  },
})
