"use client";

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
		if (typeof element == "string") {
			const elemRef = document.querySelector(element);
			animate(elemRef, keyframeStyle, animationConfig);
		} else {
			animate(element, keyframeStyle, animationConfig);
		}
	} catch (ex) {
		console.error(ex);
	}
};
