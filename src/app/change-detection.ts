import { CheckType, Services, ViewData } from '@angular/core/src/view';

export function checkAndUpdateView(view: ViewData) {
    // modifying ViewState related to FirstCheck
    // updating bindings
    // running change detection for the embedded views
    // updating @ContentChild and @ContentChildren queries
    // calls AfterContentChecked and AfterContentInit lifecycle hooks

    Services.updateRenderer(view, CheckType.CheckAndUpdate);

    // running change detection for child views (components)
    // updating @ViewChild and @ViewChildren queries
    // calls AfterViewChecked and AfterViewInit lifecycle hooks
    // modifying ViewState related to OnPush
}