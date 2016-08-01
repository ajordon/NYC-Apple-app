import { Component, OnInit } from '@angular/core';
import { AttendeeService } from '../attendee.service';
import { Attendee } from './attendee.model';

@Component({
  moduleId: module.id,
  selector: 'app-attendees',
  templateUrl: 'attendees.component.html',
  styleUrls: ['attendees.component.css'],
  providers: [AttendeeService]
})
export class AttendeesComponent implements OnInit {
  // attendees: Attendee[];
  attendees;
  name;

  constructor(private attendeeService: AttendeeService) { }

  ngOnInit() {
  //  this.attendees = this.attendeeService.getAttendees();
  }

  addAttendee() {
    this.attendees.push({name: this.name});
    this.name = ' ';
  }

  deleteAttendee(attendeeName) {
    for (let i = 0; i < this.attendees.length; i++) {
      if (this.attendees[i].name === attendeeName) {
        this.attendees.splice(i, 1);
      }
    }
  }
}
