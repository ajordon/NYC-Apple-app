import { Injectable } from '@angular/core';
import { APPLES } from './mock-apples';

@Injectable()
export class AppleService {
    getApples() {
        return APPLES;
    }

    addApple(apple) {
        APPLES.push(apple);
    }

    totalApples() {
        return APPLES.length;
    }

    deleteApple(apple) {
    for (let i = 0; i < APPLES.length; i++) {
      if (APPLES[i].id === apple.id) {
        APPLES.splice(i, 1);
      }
    }
  }
}
