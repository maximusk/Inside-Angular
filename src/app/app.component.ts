import {Component} from '@angular/core';


@Component({
    selector: 'my-app',
    template: `<span [textContent]="getValue()"></span>`
})
export class AppComponent {
    getValue() {
        return Math.random();
    }
}