import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommandeSensibleComponent } from './commande-sensible.component';

describe('CommandeSensibleComponent', () => {
  let component: CommandeSensibleComponent;
  let fixture: ComponentFixture<CommandeSensibleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommandeSensibleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommandeSensibleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
