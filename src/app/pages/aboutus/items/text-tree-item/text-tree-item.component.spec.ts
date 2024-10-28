import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextTreeItemComponent } from './text-tree-item.component';

describe('TextTreeItemComponent', () => {
  let component: TextTreeItemComponent;
  let fixture: ComponentFixture<TextTreeItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TextTreeItemComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TextTreeItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
