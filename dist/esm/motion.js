/* eslint-disable react/prop-types */
"use client";
import * as React from "react";
import { animate, } from "motion";
export const useMotionAnimate = (element, keyframeStyle, animationConfig) => {
    try {
        animate(element, keyframeStyle, animationConfig);
    }
    catch (ex) {
        console.error(ex);
    }
};
export const Motion = ({ children, animate, transition, }) => {
    const currentElem = React.useRef(null);
    React.useEffect(() => {
        useMotionAnimate(currentElem.current, animate, transition);
    }, []);
    return React.createElement("div", { ref: currentElem }, children ? children : React.createElement(React.Fragment, null));
};
