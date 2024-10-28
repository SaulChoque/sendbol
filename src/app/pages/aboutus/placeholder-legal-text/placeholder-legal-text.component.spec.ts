import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaceholderLegalTextComponent } from './placeholder-legal-text.component';

describe('PlaceholderLegalTextComponent', () => {
  let component: PlaceholderLegalTextComponent;
  let fixture: ComponentFixture<PlaceholderLegalTextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlaceholderLegalTextComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlaceholderLegalTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
