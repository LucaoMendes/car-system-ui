import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThirdPhaseComponent } from './third-phase.component';

describe('ThirdPhaseComponent', () => {
  let component: ThirdPhaseComponent;
  let fixture: ComponentFixture<ThirdPhaseComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ThirdPhaseComponent]
    });
    fixture = TestBed.createComponent(ThirdPhaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
