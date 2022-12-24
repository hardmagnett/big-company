import dashboard from '@/app/router/dashboard';
import employees from '@/app/router/employees';
import departments from '@/app/router/departments';

let routes = [
  ...dashboard,
  ...employees,
  ...departments,
]

export default routes
