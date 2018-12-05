import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppEntityComponent } from './app-entity.component';

describe('AppEntityComponent', () => {
  let component: AppEntityComponent;
  let fixture: ComponentFixture<AppEntityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppEntityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppEntityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
