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

export const Motion = ({
	children,
	animate,
	transition,
}: {
	children: React.ReactNode;
	animate: MotionKeyframesDefinition;
	transition?: AnimationOptionsWithOverrides;
}) => {
	const currentElem = React.useRef(null);

	React.useEffect(() => {
		if (currentElem.current !== null) {
			useMotionAnimate(currentElem.current, animate, transition);
		}
	}, []);

	return <div ref={currentElem}>{children ? children : <></>}</div>;
};
