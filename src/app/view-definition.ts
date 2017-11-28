import { elementDef, viewDef } from '@angular/core/src/view';

viewDef(0, [
    elementDef(0, 0, null, null, 0, 'span', [], [[8, 'textContent', 0]])
], updateRenderer, null);

function updateRenderer(_ck, _v) {
    const _co = _v.component;
    const currVal_0 = _co.getValue();
    _ck(_v, 0, 0, currVal_0);
}

// _ck === function prodCheckAndUpdateNode(view: ViewData, checkIndex: number, argStyle: ArgumentType, ...args);

export const viewDefinition = {
    flags: ViewFlags.None,
    nodes: [
        {
            flags: NodeFlags.TypeElement,
            bindings: [
                {
                    flags: BindingFlags.TypeProperty,
                    name: 'textContent'
                }
            ],
            element: {
                name: 'span'
            }
        }
    ],
    updateDirectives: NOOP,
    updateRenderer: updateRenderer
};

function NOOP() {
}

export const enum ViewFlags {
    None = 0,
    OnPush = 1 << 1,

    Types = None | OnPush
}

export const enum NodeFlags {
    TypeElement = 1 << 0,
    TypeText = 1 << 1,

    Types = TypeElement | TypeText
}

export const enum BindingFlags {
    TypeElementAttribute = 1 << 0,
    TypeElementClass = 1 << 1,
    TypeElementStyle = 1 << 2,
    TypeProperty = 1 << 3,

    Types = TypeElementAttribute | TypeElementClass | TypeElementStyle | TypeProperty
}