import { Component } from '@angular/core';

@Component({
    selector: 'b-comp',
    template: ``
})
export class BComponent {
    ngDoCheck() {
        console.log(`running change detection for A component`);
    }
}
