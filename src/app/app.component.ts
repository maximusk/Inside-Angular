import { Component, NgZone } from '@angular/core';
import { poll } from './polling';

declare const gapi;

@Component({
    selector: 'my-app',
    template: `<span [textContent]="prop"></span>`
})
export class AppComponent {
    prop = `Element Input Binding Update`;

    constructor() {
        poll((v) => {
            this.prop = v;
            console.log('updating value to `${v}`');
        })
    }

    ngDoCheck() {
        console.log('detecting changes');
    }
}