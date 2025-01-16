import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzTreeModule } from 'ng-zorro-antd/tree';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxsModule } from '@ngxs/store';

import { EmployeeState } from '../app/store/employee/Employe.State'; // Adjust path to EmployeeState if needed
import { EmployeeTreeComponent } from './components/employee-tree/employee-tree.component';
import { EmployeeFormComponent } from '../app/employefrom/employeeform.component';
import { EmployeeServicesComponent } from './employee-service/employee-services.component'; // Ensure consistency with naming
import { EmployeeService } from './employee-service/employee.services';
@NgModule({
  declarations: [
    AppComponent,
    // EmployeeTreeComponent,
    EmployeeFormComponent,
    EmployeeServicesComponent,
    
  ],
  imports: [
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NgxsModule.forRoot([EmployeeState]),
    NzButtonModule,
    NzInputModule,
    NzFormModule,
    NzSelectModule,
    NzTreeModule,
    NzIconModule
  ],
  providers: [
    EmployeeService, // Add the service here if it's not provided in the service itself.
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }

