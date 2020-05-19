import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VersionAutoriseeComponent } from './version-autorisee.component';

describe('VersionAutoriseeComponent', () => {
  let component: VersionAutoriseeComponent;
  let fixture: ComponentFixture<VersionAutoriseeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VersionAutoriseeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VersionAutoriseeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
