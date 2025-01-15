import { Component, Input, OnInit } from '@angular/core';
import { Employee } from '../../models/employee.model';
import { Store, Select } from '@ngxs/store';
import { EmployeeState } from '../../store/employee.state';
import { Observable } from 'rxjs';
import { GetEmployees, DeleteEmployee } from '../../store/employee.actions';

@Component({
  selector: 'app-employee-tree',
  templateUrl: './employee-tree.component.html',
  styleUrls: ['./employee-tree.component.css']
})
export class EmployeeTreeComponent implements OnInit {
  @Select(EmployeeState.getEmployeeTree) employeeTree$!: Observable<Employee[]>;

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.store.dispatch(new GetEmployees());
  }

  deleteEmployee(id: number): void {
    this.store.dispatch(new DeleteEmployee(id));
  }
}
