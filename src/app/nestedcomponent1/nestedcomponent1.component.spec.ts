import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Nestedcomponent1Component } from './nestedcomponent1.component';

describe('Nestedcomponent1Component', () => {
  let component: Nestedcomponent1Component;
  let fixture: ComponentFixture<Nestedcomponent1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Nestedcomponent1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Nestedcomponent1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
