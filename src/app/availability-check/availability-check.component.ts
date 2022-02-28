import { Component, Input, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AvailabilityService } from '../services/availability.service';

@Component({
  selector: 'app-availability-check',
  templateUrl: './availability-check.component.html',
  styleUrls: ['./availability-check.component.scss'],
})
export class AvailabilityCheckComponent {
  @Input() date: Date | null = new Date();
  @Input() time: string | null = '';

  constructor(
    private _availabilityService: AvailabilityService,
    private _snackBar: MatSnackBar
  ) {}

  onCheckAvailability(date: Date | null, time: string | null) {
    const datetime = date?.toISOString().split('T')[0] + 'T' + time;
    return this._availabilityService
      .checkAvailability(datetime)
      .subscribe((isAvailable) => this.showPopup(isAvailable.available));
  }

  showPopup(isAvailable: boolean) {
    isAvailable
      ? this._snackBar.open('This resource is available')
      : this._snackBar.open('This resource is not available');
  }
}
