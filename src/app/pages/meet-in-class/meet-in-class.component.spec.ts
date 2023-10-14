import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeetInClassComponent } from './meet-in-class.component';

describe('MeetInClassComponent', () => {
  let component: MeetInClassComponent;
  let fixture: ComponentFixture<MeetInClassComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MeetInClassComponent]
    });
    fixture = TestBed.createComponent(MeetInClassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
