import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Scr1Component } from './scr1.component';

describe('Scr1Component', () => {
  let component: Scr1Component;
  let fixture: ComponentFixture<Scr1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Scr1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Scr1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
