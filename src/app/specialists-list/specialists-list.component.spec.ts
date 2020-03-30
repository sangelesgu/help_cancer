import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecialistsListComponent } from './specialists-list.component';

describe('SpecialistsListComponent', () => {
  let component: SpecialistsListComponent;
  let fixture: ComponentFixture<SpecialistsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpecialistsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpecialistsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
