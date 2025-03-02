import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PositionFormComponent } from '../app/postion-form/postion-form.component';
import { EmployeeTreeComponent } from '../app/components/employee-tree/employee-tree.component';

const routes: Routes = [
  { path: 'positions', component: EmployeeTreeComponent },
  { path: 'add-position', component: PositionFormComponent },
  { path: '', redirectTo: '/positions', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

