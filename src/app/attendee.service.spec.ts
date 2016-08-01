/* tslint:disable:no-unused-variable */

import { addProviders, async, inject } from '@angular/core/testing';
import { AttendeeService } from './attendee.service';

describe('Service: Attendee', () => {
  beforeEach(() => {
    addProviders([AttendeeService]);
  });

  it('should ...',
    inject([AttendeeService],
      (service: AttendeeService) => {
        expect(service).toBeTruthy();
      }));
});
