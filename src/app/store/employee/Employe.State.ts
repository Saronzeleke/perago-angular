import { State, Action, StateContext, Selector } from '@ngxs/store';
import { Employee } from '../model/employee/employee.model';

   

import { GetEmployees, DeleteEmployee } from './employee.actions';

interface EmployeeStateModel {
  employees: Employee[];
}

@State<EmployeeStateModel>({
  name: 'employees',
  defaults: {
    employees: []
  }
})
export class EmployeeState {
  @Selector()
  static getEmployeeTree(state: EmployeeStateModel): Employee[] {
    const map = new Map<number, Employee & { children: Employee[] }>();
    state.employees.forEach(emp => map.set(emp.id, { ...emp, children: [] }));
    state.employees.forEach(emp => {
      if (emp.parentId !== null) {
        map.get(emp.parentId)?.children.push(map.get(emp.id)!);
      }
    });
    return Array.from(map.values()).filter(emp => emp.parentId === null);
  }

  @Action(GetEmployees)
  getEmployees(ctx: StateContext<EmployeeStateModel>) {
    const employees = [ /* Fetch or mock employee data */ ];
    ctx.patchState({ employees });
  }

  @Action(DeleteEmployee)
  deleteEmployee(ctx: StateContext<EmployeeStateModel>, action: DeleteEmployee) {
    const state = ctx.getState();
    const filtered = state.employees.filter(emp => emp.id !== action.id);
    ctx.patchState({ employees: filtered });
  }
}
