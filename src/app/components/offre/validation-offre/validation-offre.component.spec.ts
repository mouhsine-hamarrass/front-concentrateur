import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidationOffreComponent } from './validation-offre.component';

describe('ValidationOffreComponent', () => {
  let component: ValidationOffreComponent;
  let fixture: ComponentFixture<ValidationOffreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ValidationOffreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ValidationOffreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
