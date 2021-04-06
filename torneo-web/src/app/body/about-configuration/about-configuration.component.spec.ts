import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutConfigurationComponent } from './about-configuration.component';

describe('AboutConfigurationComponent', () => {
  let component: AboutConfigurationComponent;
  let fixture: ComponentFixture<AboutConfigurationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutConfigurationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutConfigurationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
