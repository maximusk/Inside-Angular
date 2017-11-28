import { Component, NgZone } from '@angular/core';

declare const gapi;

@Component({
    selector: 'my-app',
    template: `<span [textContent]="prop"></span>`
})
export class AppComponent {
    prop = `Element Input Binding Update`;

    constructor(zone: NgZone) {
        gapi.load('client', (data) => {
            zone.run(() => {
                this.prop = data.prop;
            });
        });
    }
}