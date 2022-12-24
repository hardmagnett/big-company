export default [
  {
    path: '/employees',
    name: 'employees',
    component: () => import('@/app/views/employees/Employees.vue')
  },
  {
    path: '/employees/create',
    name: 'employeeCreate',
    component: () => import('@/app/views/employees/EmployeeAddOrEdit.vue')
  },
  {
    path: '/employees/:employeeId',
    name: 'employeeEdit',
    component: () => import('@/app/views/employees/EmployeeAddOrEdit.vue')
  },
]
