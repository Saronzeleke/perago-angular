import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxsModule } from '@ngxs/store';

import { EmployeeState } from '../app/store/employee/Employe.State'; // Adjust path to EmployeeState if needed
import { EmployeeTreeComponent } from './components/employee-tree/employee-tree.component';
import { EmployeeFormComponent } from '../app/employefrom/employeeform.component';
import { EmployeeServicesComponent } from './employee-services/employee-services.component'; // Ensure consistency with naming
import { EmployeeService } from '../app/employee-services/employe.service'; // If not already injected in @Injectable()

@NgModule({
  declarations: [
    AppComponent,
    EmployeeTreeComponent,
    EmployeeFormComponent,
    EmployeeServicesComponent // Ensure correct naming
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    NgZorroAntdModule,
    BrowserAnimationsModule,
    NgxsModule.forRoot([EmployeeState]),
  ],
  providers: [
    EmployeeService, // Add the service here if it's not provided in the service itself.
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }

