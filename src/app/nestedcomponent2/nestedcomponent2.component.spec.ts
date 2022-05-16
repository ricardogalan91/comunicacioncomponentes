import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Nestedcomponent2Component } from './nestedcomponent2.component';

describe('Nestedcomponent2Component', () => {
  let component: Nestedcomponent2Component;
  let fixture: ComponentFixture<Nestedcomponent2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Nestedcomponent2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Nestedcomponent2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
