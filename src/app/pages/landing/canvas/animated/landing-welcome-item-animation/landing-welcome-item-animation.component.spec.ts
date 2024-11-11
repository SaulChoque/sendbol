import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingWelcomeItemAnimationComponent } from './landing-welcome-item-animation.component';

describe('LandingWelcomeItemAnimationComponent', () => {
  let component: LandingWelcomeItemAnimationComponent;
  let fixture: ComponentFixture<LandingWelcomeItemAnimationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LandingWelcomeItemAnimationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LandingWelcomeItemAnimationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
