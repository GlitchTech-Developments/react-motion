import * as React from "react";
import { type AnimationOptionsWithOverrides, type ElementOrSelector, type MotionKeyframesDefinition } from "motion";
export declare const useMotionAnimate: (element: ElementOrSelector, keyframeStyle: MotionKeyframesDefinition, animationConfig?: AnimationOptionsWithOverrides) => void;
export declare const Motion: ({ children, animate, transition, }: {
    children: React.ReactNode;
    animate: MotionKeyframesDefinition;
    transition?: AnimationOptionsWithOverrides | undefined;
}) => React.JSX.Element;
