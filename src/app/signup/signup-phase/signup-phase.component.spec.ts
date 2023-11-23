import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignupPhaseComponent } from './signup-phase.component';

describe('SignupPhaseComponent', () => {
  let component: SignupPhaseComponent;
  let fixture: ComponentFixture<SignupPhaseComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SignupPhaseComponent]
    });
    fixture = TestBed.createComponent(SignupPhaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
