import { Component } from '@angular/core';

declare const gapi;

@Component({
    selector: 'my-app',
    template: `<span [textContent]="prop"></span>`
})
export class AppComponent {
    prop = `Element Input Binding Update`;

    constructor() {
        gapi.load('client', (data) => {
            this.prop = data.prop;
        });
    }
}