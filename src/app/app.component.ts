import { Component } from '@angular/core';
import { AttendeesComponent } from './attendees/attendees.component';
import { AppleComponent } from './apple/apple.component';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  directives: [AttendeesComponent, AppleComponent]
})
export class AppComponent {
  title = 'NYC Apple Report';
}
