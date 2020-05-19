import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MessageTerminauxComponent } from './message-terminaux.component';

describe('MessageTerminauxComponent', () => {
  let component: MessageTerminauxComponent;
  let fixture: ComponentFixture<MessageTerminauxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MessageTerminauxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MessageTerminauxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
