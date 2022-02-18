import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyTimePickerComponent } from './my-time-picker.component';

describe('MyTimePickerComponent', () => {
  let component: MyTimePickerComponent;
  let fixture: ComponentFixture<MyTimePickerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyTimePickerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyTimePickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
