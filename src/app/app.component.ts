import {ApplicationRef, Component} from '@angular/core';


@Component({
    selector: 'my-app',
    template: `<span [textContent]="prop"></span>`
})
export class AppComponent {
    prop = `Element Input Binding Update`;

    constructor(app: ApplicationRef) {
        setTimeout(() => { this.prop = 'updated'; app.tick() }, 2000);
    }
}