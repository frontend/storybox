import React from 'react';
// Helpers to render html source code
// Hack based on https://github.com/reactjs/rfcs/pull/129#issuecomment-1140379292
var HtmlComment = function (_a) {
    var children = _a.children;
    return (React.createElement("script", { 
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML: {
            __html: "</script><!-- ".concat(children, " --><script>"),
        } }));
};
export var ComponentWrapper = function (_a) {
    var name = _a.name, children = _a.children;
    return (React.createElement(React.Fragment, null,
        React.createElement(HtmlComment, null, "".concat(name, " Start")),
        children,
        React.createElement(HtmlComment, null, "".concat(name, " End"))));
};
export default HtmlComment;
//# sourceMappingURL=HtmlComment.js.map