import { Injectable } from '@angular/core';
import { APPLES } from './mock-apples';
import { Apple } from './apple.interface';

@Injectable()
export class AppleService {
    getApples() {
        return APPLES;
    }

    addApple(apple) {
        // console.log(apple);
        // console.log(apple._value.color);
        // console.log(apple._value.date.replace(/-/, '/').replace(/-/, '/'));
        // for (let el of apple._value.attendees.name) {
        //     console.log(el);
        // }
        let newApple: Apple = {
            date: apple._value.date.replace(/-/, '/').replace(/-/, '/'),
            color: apple._value.color,
            attendees: apple._value.attendees
        };
        console.log(newApple);
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
