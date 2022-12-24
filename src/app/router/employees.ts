export default [
  {
    path: '/employees',
    name: 'employees',
    component: () => import('@/app/views/employees/Employees/Employees.vue')
  },
  {
    path: '/employees/create',
    name: 'employeeCreate',
    component: () => import('@/app/views/employees/EmployeeAddOrEdit/EmployeeAddOrEdit.vue')
  },
  {
    path: '/employees/:employeeId',
    name: 'employeeEdit',
    component: () => import('@/app/views/employees/EmployeeAddOrEdit/EmployeeAddOrEdit.vue')
  },
]
