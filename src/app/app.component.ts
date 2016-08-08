import { Component, OnInit } from '@angular/core';
import { Validators } from '@angular/common';
import { REACTIVE_FORM_DIRECTIVES, FormGroup, FormArray, FormBuilder } from '@angular/forms';

import { Apple } from './apple/apple.interface';
import { AppleService } from './apple/apple.service';
import { AppleComponent } from './apple/apple.component';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  directives: [REACTIVE_FORM_DIRECTIVES, AppleComponent],
  providers: [AppleService]
})
export class AppComponent implements OnInit {
  title = 'NYC Apple Report';
  public myForm: FormGroup;

  constructor(
    private _fb: FormBuilder,
    private appleService: AppleService) { }

  ngOnInit() {
    this.myForm = this._fb.group({
        date: ['', [Validators.required, Validators.minLength(2)]],
        color: ['', [Validators.required]],
        attendees: this._fb.array([
            this.initAttendee(),
            this.initAttendee(),
        ])
    });
  }

  initAttendee() {
    return this._fb.group({
      name: ['', Validators.required],
    });
  }

  addAttendee() {
    const control = <FormArray>this.myForm.controls['attendees'];
    control.push(this.initAttendee());
  }

  removeAttendee(i: number ) {
    const control = <FormArray>this.myForm.controls['attendees'];
    control.removeAt(i);
  }

  save(model: Apple) {
    // call API to save
    // Some command to store this new apple
    this.appleService.addApple(model);
    // this.ngOnInit();
  }
}
