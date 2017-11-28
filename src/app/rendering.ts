import { BindingDef, NodeDef, ViewData } from '@angular/core/src/view';
import { BindingFlags, NodeFlags } from './view-definition';
import { checkAndUpdateTextDynamic } from '@angular/core/src/view/text';
import { checkBinding } from '@angular/core/src/view/util';

// Angular runs change detection for each node in the view using `checkAndUpdateNodeDynamic` function
// which basically checks the node type from NodeFlags.Types and applies the correct function

function checkAndUpdateNodeDynamic(view: ViewData, nodeDef: NodeDef, values: any[]): boolean {
    switch(nodeDef.flags & NodeFlags.Types) {
        case NodeFlags.TypeElement:
            return checkAndUpdateElementDynamic(view, nodeDef, values);
        case NodeFlags.TypeText:
            return checkAndUpdateTextDynamic(view, nodeDef, values);
    }
}

// Since a node can have multiple input bindings this functions applies all of them in succession
export function checkAndUpdateElementDynamic(view: ViewData, def: NodeDef, values: any[]): boolean {
    let changed = false;
    for (let i = 0; i < values.length; i++) {
        if (checkAndUpdateElementValue(view, def, i, values[i])) changed = true;
    }
    return changed;
}

// Depending on the binding type updates DOM node using Renderer's methods setProperty, setAttribute etc.
function checkAndUpdateElementValue(view: ViewData, def: NodeDef, bindingIdx: number, value: any) {
    if (!checkAndUpdateBinding(view, def, bindingIdx, value)) {
        return false;
    }
    const binding = def.bindings[bindingIdx];
    const renderNode = view[def.nodeIndex].renderElement;
    const name = binding.name !;
    switch(binding.flags & BindingFlags.Types) {
        case BindingFlags.TypeElementAttribute:
            setElementAttribute(view, binding, renderNode, binding.ns, name, value);
            break;
        case BindingFlags.TypeProperty:
            setElementProperty(view, binding, renderNode, name, value);
            break;
    }
    return true;
}

// checks if bindings changed and updates view.oldValues
export function checkAndUpdateBinding(view: ViewData, def: NodeDef, bindingIdx: number, value: any): boolean {
    if (checkBinding(view, def, bindingIdx, value)) {
        view.oldValues[def.bindingIndex + bindingIdx] = value;
        return true;
    }
    return false;
}

// updates DOM node value for the BindingFlags.TypeProperty
function setElementProperty(view: ViewData, binding: BindingDef, renderNode: any, name: string, value: any) {
    view.renderer.setProperty(renderNode, name, value);
}

// updates DOM node value for the BindingFlags.TypeElementAttribute
function setElementAttribute(view, binding, renderNode, ns, name, value) {
    view.renderer.setAttribute(renderNode, name, value, ns);
}