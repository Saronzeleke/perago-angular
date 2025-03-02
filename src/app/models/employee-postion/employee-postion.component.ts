// src/app/models/employee-position.model.ts
export interface EmployeePosition {
  id: number;
  name: string;
  description: string;
  parentId: number | null;
}