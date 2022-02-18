import { Component } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  date$: Subject<Date> = new Subject<Date>();
  time$: Subject<Date> = new Subject<Date>()
  title = 'affluences-app';

}
