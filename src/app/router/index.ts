import employees from '@/app/router/employees';
import departments from '@/app/router/departments';

let routes = [
  ...employees,
  ...departments,
]

export default routes
