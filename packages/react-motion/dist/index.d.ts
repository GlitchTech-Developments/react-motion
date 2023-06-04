import * as React from 'react';
import * as motion from 'motion';
export { Div, useMotionAnimate } from './motion.js';

declare const _default: {
    useMotionAnimate: (element: motion.ElementOrSelector, keyframeStyle: motion.MotionKeyframesDefinition, animationConfig?: motion.AnimationOptionsWithOverrides | undefined) => void;
    Div: ({ children, animate, transition, initial, className, onClick, onMouseOver, }: {
        children: React.ReactNode;
        animate: motion.MotionKeyframesDefinition;
        transition?: motion.AnimationOptionsWithOverrides | undefined;
        initial?: React.CSSProperties | undefined;
        className?: string | undefined;
        onClick?: React.MouseEventHandler<Element> | undefined;
        onMouseOver?: React.MouseEventHandler<Element> | undefined;
    }) => React.JSX.Element;
};

export { _default as default };
