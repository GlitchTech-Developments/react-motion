/* eslint-disable react/prop-types */
"use client";

import * as React from "react";

import {
	type AnimationOptionsWithOverrides,
	type ElementOrSelector,
	type MotionKeyframesDefinition,
	animate,
} from "motion";
import { MotionProps } from "./types/motion";

export const useMotionAnimate = (
	element: ElementOrSelector,
	keyframeStyle: MotionKeyframesDefinition,
	animationConfig?: AnimationOptionsWithOverrides
) => {
	try {
		animate(element, keyframeStyle, animationConfig);
	} catch (ex) {
		console.error(ex);
	}
};

export const Motion = ({
	props,
	animate,
	transition,
}: {
	props: MotionProps;
	animate: MotionKeyframesDefinition;
	transition?: AnimationOptionsWithOverrides;
}) => {
	const currentElem = React.useRef(null);

	React.useEffect(() => {
		useMotionAnimate(currentElem.current, animate, transition);
	}, []);

	if (props.div !== undefined) {
		return (
			<div ref={currentElem}>
				{props?.children ? props?.children : ""}
			</div>
		);
	} else if (props?.span !== undefined) {
		return (
			<span ref={currentElem}>
				{props?.children ? props?.children : ""}
			</span>
		);
	} else {
		return (
			<div ref={currentElem}>
				{props?.children ? props?.children : ""}
			</div>
		);
	}
};
