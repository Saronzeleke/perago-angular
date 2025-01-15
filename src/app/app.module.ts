import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TailwindSetup } from './tailwind-setup';
import { EmployeeTreeComponent } from './components/employee-tree/employee-tree.component';
import { EmployeeFormComponent } from './components/employee-form/employee-form.component';
import { NgxsModule } from '@ngxs/store';
import { EmployeeState } from './store/employee/Employe.State';
import { EmployeeComponent } from './store/employee/employee.component';
import { ModelsComponent } from './models/models.component';
import { EmployeefromComponent } from './employeefrom/employeefrom.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeTreeComponent,
    EmployeeFormComponent,
    EmployeeComponent,
    ModelsComponent,
    EmployeefromComponent
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
 providers: [],
  bootstrap: [AppComponent],
 
})
export class AppModule { }
