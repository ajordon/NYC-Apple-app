import { Injectable } from '@angular/core';

@Injectable()
export class AttendeeService {
  constructor() { }

  getAttendees() {
     return [
      { 'id': 1, 'name': 'Aaron J.'},
      { 'id': 2, 'name': 'Aaron R.'},
      { 'id': 3, 'name': 'Julio S. S.'}
    ];
  }
}
