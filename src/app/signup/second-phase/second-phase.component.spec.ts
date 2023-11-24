import { ComponentFixture, TestBed } from '@angular/core/testing'

import { SecondPhaseComponent } from './second-phase.component'

describe('SecondPhaseComponent', () => {
  let component: SecondPhaseComponent
  let fixture: ComponentFixture<SecondPhaseComponent>

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SecondPhaseComponent]
    })
    fixture = TestBed.createComponent(SecondPhaseComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
