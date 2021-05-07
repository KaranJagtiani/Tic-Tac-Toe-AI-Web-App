import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DarkTogglerComponent } from './dark-toggler.component';

describe('DarkTogglerComponent', () => {
  let component: DarkTogglerComponent;
  let fixture: ComponentFixture<DarkTogglerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DarkTogglerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DarkTogglerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
