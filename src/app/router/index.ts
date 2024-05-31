import tasks from '@/app/router/tasks';
import employees from '@/app/router/employees';

let routes = [
  ...tasks,
  ...employees,
]

export default routes
