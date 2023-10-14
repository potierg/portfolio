import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MobibamComponent } from './mobibam.component';

describe('MobibamComponent', () => {
  let component: MobibamComponent;
  let fixture: ComponentFixture<MobibamComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MobibamComponent]
    });
    fixture = TestBed.createComponent(MobibamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
