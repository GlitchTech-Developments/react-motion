import * as React from 'react';
import * as motion from 'motion';
export { Div, useMotionAnimate } from './motion.js';

declare const _default: {
    useMotionAnimate: (element: motion.ElementOrSelector, keyframeStyle: motion.MotionKeyframesDefinition, animationConfig?: motion.AnimationOptionsWithOverrides | undefined) => void;
    Div: ({ children, animate, transition, initial, }: {
        children: React.ReactNode;
        animate: motion.MotionKeyframesDefinition;
        transition?: motion.AnimationOptionsWithOverrides | undefined;
        initial?: motion.MotionKeyframesDefinition | undefined;
    }) => React.JSX.Element;
};

export { _default as default };
