import { ChangeDetectionStrategy, ChangeDetectorRef, Component } from '@angular/core';

@Component({
    selector: 'a-comp',
    template: `
        <div>I am A component, and this is a demo of attaching/detaching change detector</div>
        <button (click)="detach()">Detach</button>
        <button (click)="attach()">Attach</button>
        <b-comp></b-comp>
    `
})
export class AComponent {

    constructor(private cd: ChangeDetectorRef) {
    }

    attach() {
        console.log('attaching');
        this.cd.reattach();
    }

    detach() {
        console.log('detaching');
        this.cd.detach();
    }
}