import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TypeTerminalComponent } from './type-terminal.component';

describe('TypeTerminalComponent', () => {
  let component: TypeTerminalComponent;
  let fixture: ComponentFixture<TypeTerminalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TypeTerminalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TypeTerminalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
