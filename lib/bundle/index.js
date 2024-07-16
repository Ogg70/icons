import * as React from 'react';

/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise, SuppressedError, Symbol */


var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

typeof SuppressedError === "function" ? SuppressedError : function (error, suppressed, message) {
    var e = new Error(message);
    return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
};

function SvgBubbleChat24(_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", fill: "none", "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: "currentColor", d: "M8.05 12.82h-.1c-.61 0-1.1-.49-1.1-1.1s.49-1.1 1.1-1.1h.1c.61 0 1.1.49 1.1 1.1s-.49 1.1-1.1 1.1M12.05 12.82h-.1c-.61 0-1.1-.49-1.1-1.1s.49-1.1 1.1-1.1h.1c.61 0 1.1.49 1.1 1.1s-.49 1.1-1.1 1.1M16.05 12.82h-.1c-.61 0-1.1-.49-1.1-1.1s.49-1.1 1.1-1.1h.1c.61 0 1.1.49 1.1 1.1s-.49 1.1-1.1 1.1" }),
        React.createElement("path", { fill: "currentColor", d: "m2 22 1.15-5.34A10.04 10.04 0 0 1 2 12C2 6.49 6.49 2 12 2s10 4.49 10 10-4.49 10-10 10c-1.7 0-3.36-.43-4.83-1.25zm5.38-2.85.27.16A8.5 8.5 0 0 0 12 20.5c4.69 0 8.5-3.81 8.5-8.5S16.69 3.5 12 3.5 3.5 7.31 3.5 12c0 1.46.38 2.91 1.1 4.18l.14.25-.73 3.49 3.38-.77z" })));
}

function SvgMinus16(_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", fill: "none", "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: "currentColor", d: "M14.25 7.25H1.75c-.41 0-.75.34-.75.75s.34.75.75.75h12.5c.41 0 .75-.34.75-.75s-.34-.75-.75-.75" })));
}

function SvgPlus24(_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", fill: "none", "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: "currentColor", d: "M14.25 7.25h-5.5v-5.5C8.75 1.34 8.41 1 8 1s-.75.34-.75.75v5.5h-5.5c-.41 0-.75.34-.75.75s.34.75.75.75h5.5v5.5c0 .41.34.75.75.75s.75-.34.75-.75v-5.5h5.5c.41 0 .75-.34.75-.75s-.34-.75-.75-.75" })));
}

export { SvgBubbleChat24 as BubbleChat24, SvgMinus16 as Minus16, SvgPlus24 as Plus24 };
//# sourceMappingURL=index.js.map
