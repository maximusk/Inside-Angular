import { Component, NgZone } from '@angular/core';

@Component({
    selector: 'my-app',
    template: `
        <div style="margin-bottom: 10px">
            <button (click)="fn()">Trigger change detection</button>
        </div>
        <a-comp [i]="v"></a-comp>
    `
})
export class AppComponent {
    v = `value from parent`;

    fn() {
    }
}