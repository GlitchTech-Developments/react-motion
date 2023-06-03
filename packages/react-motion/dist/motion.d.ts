import * as React from 'react';
import { ElementOrSelector, MotionKeyframesDefinition, AnimationOptionsWithOverrides } from 'motion';

declare const useMotionAnimate: (element: ElementOrSelector, keyframeStyle: MotionKeyframesDefinition, animationConfig?: AnimationOptionsWithOverrides) => void;
declare const Div: ({ children, animate, transition, initial, }: {
    children: React.ReactNode;
    animate: MotionKeyframesDefinition;
    transition?: AnimationOptionsWithOverrides | undefined;
    initial?: MotionKeyframesDefinition | undefined;
}) => React.JSX.Element;

export { Div, useMotionAnimate };
