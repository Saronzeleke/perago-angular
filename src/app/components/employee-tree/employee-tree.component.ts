import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee-services/employe.service';
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
    this.employeeService.getPositions().subscribe((data) => {
      this.positions = this.transformDataToTree(data);
    });
  }

  transformDataToTree(data: any[]): NzTreeNodeOptions[] {
    return data.map(position => ({
      title: position.name,
      key: position.id.toString(),
      children: position.children ? this.transformDataToTree(position.children) : []
    }));
  }
}
