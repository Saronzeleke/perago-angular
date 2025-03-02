import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { NzButtonModule } from 'ng-zorro-antd/button'; // Import specific modules
import { EmployeeTreeComponent } from './components/employee-tree/employee-tree.component';
import { NgxsModule } from '@ngxs/store';
import { EmployeeState } from './store/employee/Employe.State';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AppComponent, EmployeeTreeComponent],
      imports: [
        NzButtonModule, // Example: import specific Ng-Zorro module
        NgxsModule.forRoot([EmployeeState]),
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  it(`should have as title 'Perago Employee Hierarchy'`, () => {
    expect(component.title).toEqual('Perago Employee Hierarchy');
  });

  it('should render title in a h1 tag', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain('Perago Employee Hierarchy');
  });
});
