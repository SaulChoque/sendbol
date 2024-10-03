import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Scr2Component } from './scr2.component';

describe('Scr2Component', () => {
  let component: Scr2Component;
  let fixture: ComponentFixture<Scr2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Scr2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Scr2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
