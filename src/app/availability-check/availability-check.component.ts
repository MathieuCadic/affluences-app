import { Component, Input, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { AvailabilityService } from '../services/availability.service';

@Component({
  selector: 'app-availability-check',
  templateUrl: './availability-check.component.html',
  styleUrls: ['./availability-check.component.scss'],
})
export class AvailabilityCheckComponent implements OnInit {
  @Input() date$: Subject<Date> = new Subject<Date>();
  @Input() time$: Subject<Date> = new Subject<Date>();

  constructor(private _availabilityService: AvailabilityService) {}

  ngOnInit(): void {}

  onCheckAvailability() {
    console.log('availability checked');

    return this._availabilityService
      .checkAvailability()
      .subscribe((isAvailable) => this.showPopup(isAvailable));
  }

  showPopup(isAvailable: boolean) {
    isAvailable
      ? console.log('This resource is available')
      : console.error('This resource is not available');
  }
}
