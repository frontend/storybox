import React from 'react';
import clsx from 'clsx';
import { ComponentWrapper } from "../../storybook/HtmlComment";
var Blank = function (_a) {
    var active = _a.active;
    return (React.createElement(ComponentWrapper, { name: "Blank" },
        React.createElement("span", { className: clsx('blank', active && 'blank-active') }, "Blank component")));
};
export default Blank;
//# sourceMappingURL=Blank.js.map