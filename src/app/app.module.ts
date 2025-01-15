import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EmployeeTreeComponent } from './components/employee-tree/employee-tree.component';
import { EmployeeFormComponent } from './components/employee-form/employee-form.component';
import { NgxsModule } from '@ngxs/store';
import { EmployeeState } from './store/employee/Employe.State';
import { EmployeeComponent } from './store/employee/employee.component';
import { ModelsComponent } from './models/models.component';
import { EmployeefromComponent } from './employeefrom/employeefrom.component';
import { EmployeeformComponent } from './employeefrom/employeeform.component';
import { EmployeeServicesComponent } from './employee-services/employee-services.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeTreeComponent,
    EmployeeFormComponent,
    EmployeeComponent,
    ModelsComponent,
    EmployeefromComponent,
    EmployeeformComponent,
    EmployeeServicesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    NzButtonModule,  // Import button module
    NzInputModule,   // Import input module
    BrowserAnimationsModule,
    NgxsModule.forRoot([EmployeeState]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
