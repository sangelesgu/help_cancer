import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecialistFormComponent } from './specialist-form.component';

describe('SpecialistFormComponent', () => {
  let component: SpecialistFormComponent;
  let fixture: ComponentFixture<SpecialistFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpecialistFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpecialistFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
