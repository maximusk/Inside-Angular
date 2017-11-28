import { Component, Input } from '@angular/core';

@Component({
    selector: 'a-comp',
    template: `
        <div>I am A component, and here is value from my parent: "{{i}}"</div>
    `
})
export class AComponent {
    @Input() i;
}
