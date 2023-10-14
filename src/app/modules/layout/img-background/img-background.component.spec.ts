import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImgBackgroundComponent } from './img-background.component';

describe('ImgBackgroundComponent', () => {
  let component: ImgBackgroundComponent;
  let fixture: ComponentFixture<ImgBackgroundComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ImgBackgroundComponent]
    });
    fixture = TestBed.createComponent(ImgBackgroundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
