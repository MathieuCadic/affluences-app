import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-my-date-picker',
  templateUrl: './my-date-picker.component.html',
  styleUrls: ['./my-date-picker.component.scss'],
})
export class MyDatePickerComponent {
  @Output() date: EventEmitter<Date> = new EventEmitter<Date>();

  constructor() {}
}
