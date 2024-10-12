import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingItemComponent } from './landing-item.component';

describe('LandingItemComponent', () => {
  let component: LandingItemComponent;
  let fixture: ComponentFixture<LandingItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LandingItemComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LandingItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
