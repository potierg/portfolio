import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EpitechComponent } from './epitech.component';

describe('EpitechComponent', () => {
  let component: EpitechComponent;
  let fixture: ComponentFixture<EpitechComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EpitechComponent]
    });
    fixture = TestBed.createComponent(EpitechComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
