/* eslint-disable react/prop-types */
"use client";

import * as React from "react";

import {
	type AnimationOptionsWithOverrides,
	type ElementOrSelector,
	type MotionKeyframesDefinition,
	animate,
} from "motion";

type tMotionElemProps = {
	children: React.ReactNode;
	animate: MotionKeyframesDefinition;
	transition?: AnimationOptionsWithOverrides;
	initial?: React.CSSProperties;
	className?: string;
	onClick?: React.MouseEventHandler;
	onMouseOver?: React.MouseEventHandler;
};

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

const useMotionElemFunctionality = ({
	initial,
	animate,
	transition,
}: tMotionElemProps) => {
	const currentElem = React.useRef<HTMLDivElement | null>(null);
	const initialStyle = Object(initial);

	React.useEffect(() => {
		if (currentElem.current !== null) {
			useMotionAnimate(currentElem.current, animate, transition);
		}
	}, []);

	return {
		currentElem,
		initialStyle,
	};
};

export const Div = ({
	children,
	animate,
	transition,
	initial,
	className,
	onClick,
	onMouseOver,
}: tMotionElemProps) => {
	const motionElemProps = useMotionElemFunctionality({
		children,
		animate,
		transition,
		initial,
		className,
		onClick,
		onMouseOver,
	});

	return (
		<div
			ref={motionElemProps.currentElem}
			style={
				motionElemProps.initialStyle
					? motionElemProps.initialStyle
					: undefined
			}
			className={className ? className : undefined}
			onClick={onClick ? onClick : undefined}
			onMouseOver={onMouseOver ? onMouseOver : undefined}
		>
			{children ? children : <></>}
		</div>
	);
};
