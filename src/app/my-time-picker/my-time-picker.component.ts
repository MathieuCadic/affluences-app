import { Component, EventEmitter, OnInit, Output } from '@angular/core';

interface TimeList {
  timeValue: string;
  timeDisplay: string;
}

@Component({
  selector: 'app-my-time-picker',
  templateUrl: './my-time-picker.component.html',
  styleUrls: ['./my-time-picker.component.scss'],
})
export class MyTimePickerComponent implements OnInit {
  @Output() time: EventEmitter<string> = new EventEmitter<string>();
  timeList: TimeList[] = [];

  constructor() {}

  ngOnInit(): void {
    this.timeList = this.generateTimeList();
  }

  generateTimeList(): TimeList[] {
    return Array.from(Array(24).keys())
      .map((hour) => {
        if (hour < 10) {
          return [
            {
              timeDisplay: hour + ':00',
              timeValue: '0' + hour + ':00:00',
            },
            {
              timeDisplay: hour + ':30',
              timeValue: '0' + hour + ':30:00',
            },
          ] as TimeList[];
        } else {
          return [
            {
              timeDisplay: hour + ':00',
              timeValue: hour + ':00:00',
            },
            {
              timeDisplay: hour + ':30',
              timeValue: hour + ':30:00',
            },
          ] as TimeList[];
        }
      })
      .flat();
  }
}
