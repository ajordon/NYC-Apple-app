import { Injectable } from '@angular/core';
import { APPLES } from './mock-apples';
import { Apple } from './apple.interface';

@Injectable()
export class AppleService {
    getApples() {
        return APPLES;
    }

    addApple(apple) {
        let newApple: Apple = {
            date: apple._value.date.replace(/-/, '/').replace(/-/, '/'),
            color: apple._value.color,
            attendees: apple._value.attendees
        };
        APPLES.push(newApple);
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
