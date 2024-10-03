import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Scr3Component } from './scr3.component';

describe('Scr3Component', () => {
  let component: Scr3Component;
  let fixture: ComponentFixture<Scr3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Scr3Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Scr3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
