import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingBrandsItemAnimationComponent } from './landing-brands-item-animation.component';

describe('LandingBrandsItemAnimationComponent', () => {
  let component: LandingBrandsItemAnimationComponent;
  let fixture: ComponentFixture<LandingBrandsItemAnimationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LandingBrandsItemAnimationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LandingBrandsItemAnimationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
