import { Component } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  date$: Subject<Date | null> = new Subject<Date | null>();
  time$: Subject<string | null> = new Subject<string | null>();
}
