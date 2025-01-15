import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostionFormComponent } from './postion-form.component';

describe('PostionFormComponent', () => {
  let component: PostionFormComponent;
  let fixture: ComponentFixture<PostionFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostionFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PostionFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
