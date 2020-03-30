import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecialistPageComponent } from './specialist-page.component';

describe('SpecialistPageComponent', () => {
  let component: SpecialistPageComponent;
  let fixture: ComponentFixture<SpecialistPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpecialistPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpecialistPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
