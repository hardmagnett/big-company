import type { FilterEmployees } from "@/app/components/employees/EmployeesFilter/EmployeesFilter.vue";
import type Employee from "@/app/models/employee/Employee";

const isEmployeePassesFilter = (
  employee: Employee,
  filter: FilterEmployees,
) => {
  const areFilterPositionsEmpty = filter.positionsIds.length === 0;
  const isEmployeePositionSelectedInFilter = filter.positionsIds.includes(
    employee.position_id,
  );
  const isEmployeePassesPosition =
    areFilterPositionsEmpty || isEmployeePositionSelectedInFilter;
  if (!isEmployeePassesPosition) return false;

  const isEmployeePassesName = employee.firstname
    .toLowerCase()
    .includes(filter.query.toLowerCase());

  if (!isEmployeePassesName) return false;

  return true;
};

export { isEmployeePassesFilter };
