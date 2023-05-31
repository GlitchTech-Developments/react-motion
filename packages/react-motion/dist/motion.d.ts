import * as React from 'react';
import { ElementOrSelector, MotionKeyframesDefinition, AnimationOptionsWithOverrides } from 'motion';

declare const useMotionAnimate: (element: ElementOrSelector, keyframeStyle: MotionKeyframesDefinition, animationConfig?: AnimationOptionsWithOverrides) => void;
declare const Motion: ({ children, animate, transition, }: {
    children: React.ReactNode;
    animate: MotionKeyframesDefinition;
    transition?: AnimationOptionsWithOverrides | undefined;
}) => React.JSX.Element;

export { Motion, useMotionAnimate };
