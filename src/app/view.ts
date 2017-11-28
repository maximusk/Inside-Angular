import { viewDefinition } from './view-definition';
import { AppComponent } from './app.component';

export const view = {
    component: new AppComponent(),
    state: ViewState.Attached | ViewState.ChecksEnabled,
    def: viewDefinition,
    nodes: [
        {
            renderElement: HTMLSpanElement
        }
    ],
    oldValues: ['Element Input Binding Update']
};

export const enum ViewState {
    BeforeFirstCheck = 1 << 0,
    FirstCheck = 1 << 1,
    Attached = 1 << 2,
    ChecksEnabled = 1 << 3
}