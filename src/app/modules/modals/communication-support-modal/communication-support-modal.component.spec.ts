import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommunicationSupportModalComponent } from './communication-support-modal.component';

describe('CommunicationSupportModalComponent', () => {
  let component: CommunicationSupportModalComponent;
  let fixture: ComponentFixture<CommunicationSupportModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CommunicationSupportModalComponent]
    });
    fixture = TestBed.createComponent(CommunicationSupportModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
