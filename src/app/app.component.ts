import {ApplicationRef, ChangeDetectorRef, Component} from '@angular/core';


@Component({
    selector: 'my-app',
    template: `<span [textContent]="prop"></span>`
})
export class AppComponent {
    prop = `Element Input Binding Update`;

    constructor(cd: ChangeDetectorRef) {
        setTimeout(() => { this.prop = 'updated'; cd.markForCheck() }, 2000);
    }
}