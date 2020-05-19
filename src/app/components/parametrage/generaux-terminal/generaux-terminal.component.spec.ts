import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GenerauxTerminalComponent } from './generaux-terminal.component';

describe('GenerauxTerminalComponent', () => {
  let component: GenerauxTerminalComponent;
  let fixture: ComponentFixture<GenerauxTerminalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GenerauxTerminalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GenerauxTerminalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
