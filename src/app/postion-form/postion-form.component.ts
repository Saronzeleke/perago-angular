import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EmployeeService } from '../employee-services/employe.service';

@Component({
  selector: 'app-position-form',
  templateUrl: './position-form.component.html',
  styleUrls: ['./position-form.component.scss']
})
export class PositionFormComponent {
  positionForm: FormGroup;

  constructor(private fb: FormBuilder, private employeeService: EmployeeService) {
    this.positionForm = this.fb.group({
      name: ['', Validators.required],
      description: [''],
      parentId: [null],
    });
  }

  onSubmit() {
    if (this.positionForm.valid) {
      this.employeeService.addPosition(this.positionForm.value).subscribe(() => {
        // Handle success
      });
    }
  }
}

