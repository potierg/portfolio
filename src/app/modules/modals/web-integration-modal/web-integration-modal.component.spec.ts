import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebIntegrationModalComponent } from './web-integration-modal.component';

describe('WebIntegrationModalComponent', () => {
  let component: WebIntegrationModalComponent;
  let fixture: ComponentFixture<WebIntegrationModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WebIntegrationModalComponent]
    });
    fixture = TestBed.createComponent(WebIntegrationModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
