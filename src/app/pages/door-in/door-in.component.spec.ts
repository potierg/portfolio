import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoorInComponent } from './door-in.component';

describe('DoorInComponent', () => {
  let component: DoorInComponent;
  let fixture: ComponentFixture<DoorInComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DoorInComponent]
    });
    fixture = TestBed.createComponent(DoorInComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
