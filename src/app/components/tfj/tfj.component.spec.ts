import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TfjComponent } from './tfj.component';

describe('TfjComponent', () => {
  let component: TfjComponent;
  let fixture: ComponentFixture<TfjComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TfjComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TfjComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
