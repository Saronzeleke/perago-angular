import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EmployeeService } from '../employee-service/employee.services';

@Component({
  selector: 'app-position-form',
  templateUrl:'./postion-form.component.html',
  styleUrls:['./postion-form.component.scss'],
})
export class PositionFormComponent  implements OnInit {
  positionForm: FormGroup;
  positions = [
    { id: 1, name: 'CEO' },
    { id: 2, name: 'CTO' },
  ]; // Example data
  constructor(private fb: FormBuilder, private employeeService: EmployeeService) {
    this.positionForm = this.fb.group({
      name: ['', Validators.required],
      description: [''],
      parentId: [null],
    });
    
  }
  ngOnInit(): void {}
  onSubmit() {
    if (this.positionForm.valid) {
      this.employeeService.addPosition(this.positionForm.value).subscribe(() => {
        // Handle success
      });
    }
  }
}

