/* eslint-disable react/prop-types */
"use client";
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Motion = exports.useMotionAnimate = void 0;
const React = require("react");
const motion_1 = require("motion");
const useMotionAnimate = (element, keyframeStyle, animationConfig) => {
    try {
        (0, motion_1.animate)(element, keyframeStyle, animationConfig);
    }
    catch (ex) {
        console.error(ex);
    }
};
exports.useMotionAnimate = useMotionAnimate;
const Motion = ({ children, animate, transition, }) => {
    const currentElem = React.useRef(null);
    React.useEffect(() => {
        (0, exports.useMotionAnimate)(currentElem.current, animate, transition);
    }, []);
    return React.createElement("div", { ref: currentElem }, children ? children : React.createElement(React.Fragment, null));
};
exports.Motion = Motion;
