import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MajLogicielTerminalComponent } from './maj-logiciel-terminal.component';

describe('MajLogicielTerminalComponent', () => {
  let component: MajLogicielTerminalComponent;
  let fixture: ComponentFixture<MajLogicielTerminalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MajLogicielTerminalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MajLogicielTerminalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
