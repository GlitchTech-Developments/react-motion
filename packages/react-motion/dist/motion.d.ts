import * as React from 'react';
import { ElementOrSelector, MotionKeyframesDefinition, AnimationOptionsWithOverrides } from 'motion';

type tMotionElemProps = {
    children: React.ReactNode;
    animate: MotionKeyframesDefinition;
    transition?: AnimationOptionsWithOverrides;
    initial?: React.CSSProperties;
    className?: string;
    onClick?: React.MouseEventHandler;
    onMouseOver?: React.MouseEventHandler;
};
declare const useMotionAnimate: (element: ElementOrSelector, keyframeStyle: MotionKeyframesDefinition, animationConfig?: AnimationOptionsWithOverrides) => void;
declare const Div: ({ children, animate, transition, initial, className, onClick, onMouseOver, }: tMotionElemProps) => React.JSX.Element;

export { Div, useMotionAnimate };
