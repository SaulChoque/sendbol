import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingFlagsItemAnimationComponent } from './landing-flags-item-animation.component';

describe('LandingFlagsItemAnimationComponent', () => {
  let component: LandingFlagsItemAnimationComponent;
  let fixture: ComponentFixture<LandingFlagsItemAnimationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LandingFlagsItemAnimationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LandingFlagsItemAnimationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
