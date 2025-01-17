import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../../employee-service/employee.services';


import { NzTreeNodeOptions } from 'ng-zorro-antd/tree';

@Component({
  selector: 'app-employee-tree',
  templateUrl: './employee-tree.component.html',
  styleUrls: ['./employee-tree.component.scss']
})
export class EmployeeTreeComponent implements OnInit {
  positions: NzTreeNodeOptions[] = [];

  constructor(private employeeService: EmployeeService) {}

  ngOnInit() {
    this.employeeService.getPositions().subscribe((data: any[]) => {

    
      this.positions = this.transformDataToTree(data);
    });
  }
  deleteEmployee(employeeId: number) {
    // Add logic to delete the employee, possibly by calling a service method
    console.log(`Employee with ID ${employeeId} deleted`);
  }
  
  transformDataToTree(data: any[]): NzTreeNodeOptions[] {
    return data.map(position => ({
      title: position.name,
      key: position.id.toString(),
      children: position.children ? this.transformDataToTree(position.children) : []
    }));
  }
}
