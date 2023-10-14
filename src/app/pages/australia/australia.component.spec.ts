import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AustraliaComponent } from './australia.component';

describe('AustraliaComponent', () => {
  let component: AustraliaComponent;
  let fixture: ComponentFixture<AustraliaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AustraliaComponent]
    });
    fixture = TestBed.createComponent(AustraliaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
