import { Component, OnInit } from '@angular/core';
import { Apple } from './apple.interface';
import { AppleService } from './apple.service';

@Component({
  moduleId: module.id,
  selector: 'app-apple',
  templateUrl: 'apple.component.html',
  styleUrls: ['apple.component.css'],
  providers: [AppleService]
})
export class AppleComponent implements OnInit {
  apples: Apple[];
  constructor(private appleService: AppleService) { }

  ngOnInit() {
    this.apples = this.appleService.getApples();
  }

  addApple(apple) {
    this.appleService.addApple(apple);
  }

  currentMonth() {
    let date = new Date();
    return date;
  }

  totalApples() {
    return this.appleService.totalApples();
  }

  getStyle(apple) {
    if ( apple.color === 'Green Apple') {
      return '#5EF272';
    } else {
      return '#F24C4B';
    }
  }

  deleteApple(apple) {
    this.appleService.deleteApple(apple);
  }
}
