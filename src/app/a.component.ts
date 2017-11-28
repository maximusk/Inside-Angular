import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input } from '@angular/core';

@Component({
    selector: 'a-comp',
    template: `
        <div>I am A component, and here is value from my parent: "{{i}}"</div>
        <button (click)="fn()">Update input binding inside</button>
        <b-comp></b-comp>
    `,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class AComponent {
    @Input() i;

    fn() {
        console.log('updating AComponent `i` property from setTimeout');
        this.i = 'updated from setTimeout';
    }
}