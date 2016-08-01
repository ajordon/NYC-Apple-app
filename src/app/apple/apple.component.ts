import { Component, Input} from '@angular/core';
import { Apple } from './apple.model';

@Component({
  moduleId: module.id,
  selector: 'app-apple',
  templateUrl: 'apple.component.html',
  styleUrls: ['apple.component.css']
})
export class AppleComponent {
  @Input() apples: Apple;
  constructor() { }

  addApple() {
    // this.apples.push({attendees: this.attendees, color: this.color, date: this.date});
  }

  totalApple() {
    // return this.apples.length + 1;
  }

  deleteApple(appleId) {
    // for (let i = 0; i < this.apples.length; i++) {
    //   if (this.apples[i].id === appleId) {
    //     this.apples.splice(i, 1);
    //   }
    // }
  }
}
