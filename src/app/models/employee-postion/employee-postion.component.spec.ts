import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeePostionComponent } from './employee-postion.component';

describe('EmployeePostionComponent', () => {
  let component: EmployeePostionComponent;
  let fixture: ComponentFixture<EmployeePostionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmployeePostionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployeePostionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
