import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-my-time-picker',
  templateUrl: './my-time-picker.component.html',
  styleUrls: ['./my-time-picker.component.scss']
})
export class MyTimePickerComponent implements OnInit {
  @Output() time = new EventEmitter<Date>();

  constructor() { }

  ngOnInit(): void {
  }

}
