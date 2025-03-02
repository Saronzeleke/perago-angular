// src/app/components/position-list/position-list.component.ts
import { Component, OnInit } from '@angular/core';
import { PositionService } from '../../services/position.service';
import { TreeNode } from '../../utils/tree.utils';
import { EmployeePosition } from '../../models/employee-position.model';

@Component({
  selector: 'app-position-list',
  templateUrl: './position-list.component.html',
  styleUrls: ['./position-list.component.css'],
})
export class PositionListComponent implements OnInit {
  treeData: TreeNode[] = [];

  constructor(private positionService: PositionService) {}

  ngOnInit(): void {
    this.loadPositions();
  }

  loadPositions(): void {
    this.positionService.getPositions().subscribe(positions => {
      this.treeData = buildTree(positions);
    });
  }

  onNodeClick(event: any): void {
    const selectedPosition = event.node.origin;
    console.log('Selected Position:', selectedPosition);
  }
}