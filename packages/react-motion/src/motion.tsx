/* eslint-disable react/prop-types */
"use client";

import * as React from "react";

import {
	type AnimationOptionsWithOverrides,
	type ElementOrSelector,
	type MotionKeyframesDefinition,
	animate,
} from "motion";

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

export const Div = ({
	children,
	animate,
	transition,
	initial,
}: {
	children: React.ReactNode;
	animate: MotionKeyframesDefinition;
	transition?: AnimationOptionsWithOverrides;
	initial?: MotionKeyframesDefinition;
}) => {
	const currentElem = React.useRef(null);
	const initialStyle = Object(initial);

	React.useEffect(() => {
		if (currentElem.current !== null) {
			useMotionAnimate(currentElem.current, animate, transition);
		}
	}, []);

	return (
		<div ref={currentElem} style={initialStyle}>
			{children ? children : <></>}
		</div>
	);
};
