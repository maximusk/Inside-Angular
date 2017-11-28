import { NodeDef, Services, ViewData } from '@angular/core/src/view';
import { ViewState } from './view';
import { devModeEqual } from '@angular/core/src/change_detection/change_detection_util';
import { expressionChangedAfterItHasBeenCheckedError } from '@angular/core/src/view/errors';

// Angular runs validation for each node in the view using `checkNoChangesNode` function
// which basically compares each binding with its previous version in view.oldValues
// and throws `ExpressionChangedAfterItHasBeenCheckedError` error if difference is found

function checkNoChangesNode(view: ViewData, nodeDef: NodeDef, ...values): void {
    const bindLen = nodeDef.bindings.length;
    if (bindLen > 0) checkBindingNoChanges(view, nodeDef, 0, values[0]);
    if (bindLen > 1) checkBindingNoChanges(view, nodeDef, 1, values[1]);
}

export function checkBindingNoChanges(view: ViewData, def: NodeDef, bindingIdx: number, value: any) {
    const oldValue = view.oldValues[def.bindingIndex + bindingIdx];
    if (!devModeEqual(oldValue, value)) {
        throw expressionChangedAfterItHasBeenCheckedError(
            Services.createDebugContext(view, def.nodeIndex), oldValue, value,
            (view.state & ViewState.BeforeFirstCheck) !== 0);
    }
}