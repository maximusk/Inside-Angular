import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input } from '@angular/core';

@Component({
    selector: 'a-comp',
    template: `
        <div>I am A component, and here is value from my parent: "{{i}}"</div>
        <b-comp></b-comp>
    `,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class AComponent {
    @Input() i;

    constructor(cd: ChangeDetectorRef) {
        setTimeout(() => {
            console.log('updating AComponent `i` property from setTimeout');
            this.i = 'updated from setTimeout';
            cd.markForCheck();
        }, 3000);
    }
}