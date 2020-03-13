import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VtecComponent } from './vtec.component';

describe('VtecComponent', () => {
  let component: VtecComponent;
  let fixture: ComponentFixture<VtecComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VtecComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VtecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
