import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/map';

@Component({
    selector: 'a-comp',
    template: `
        <div>I am A component, and here is value from my parent: "{{i | async}}"</div>
        <button>Update input binding inside</button>
        <b-comp></b-comp>
    `,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class AComponent {
    s = new Subject();
    @Input() i = this.s.map(v => v);

    constructor() {
        setTimeout(() => {
            console.log('updating AComponent `i` property from setTimeout through subject');
            this.s.next('updated from Subject');
        }, 2000);
    }
}