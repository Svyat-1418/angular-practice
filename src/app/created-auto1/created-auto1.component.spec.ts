import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatedAuto1Component } from './created-auto1.component';

describe('CreatedAuto1Component', () => {
  let component: CreatedAuto1Component;
  let fixture: ComponentFixture<CreatedAuto1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreatedAuto1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreatedAuto1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
