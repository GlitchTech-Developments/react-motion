"use strict";
/* eslint-disable react/prop-types */
"use client";
var __createBinding =
	(this && this.__createBinding) ||
	(Object.create
		? function (o, m, k, k2) {
				if (k2 === undefined) k2 = k;
				var desc = Object.getOwnPropertyDescriptor(m, k);
				if (
					!desc ||
					("get" in desc
						? !m.__esModule
						: desc.writable || desc.configurable)
				) {
					desc = {
						enumerable: true,
						get: function () {
							return m[k];
						},
					};
				}
				Object.defineProperty(o, k2, desc);
		  }
		: function (o, m, k, k2) {
				if (k2 === undefined) k2 = k;
				o[k2] = m[k];
		  });
var __setModuleDefault =
	(this && this.__setModuleDefault) ||
	(Object.create
		? function (o, v) {
				Object.defineProperty(o, "default", {
					enumerable: true,
					value: v,
				});
		  }
		: function (o, v) {
				o["default"] = v;
		  });
var __importStar =
	(this && this.__importStar) ||
	function (mod) {
		if (mod && mod.__esModule) return mod;
		var result = {};
		if (mod != null)
			for (var k in mod)
				if (
					k !== "default" &&
					Object.prototype.hasOwnProperty.call(mod, k)
				)
					__createBinding(result, mod, k);
		__setModuleDefault(result, mod);
		return result;
	};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Motion = exports.useMotionAnimate = void 0;
const React = __importStar(require("react"));
const motion_1 = require("motion");
const useMotionAnimate = (element, keyframeStyle, animationConfig) => {
	try {
		(0, motion_1.animate)(element, keyframeStyle, animationConfig);
	} catch (ex) {
		console.error(ex);
	}
};
exports.useMotionAnimate = useMotionAnimate;
const Motion = ({ children, animate, transition }) => {
	const currentElem = React.useRef(null);
	React.useEffect(() => {
		if (currentElem.current !== null) {
			(0, exports.useMotionAnimate)(
				currentElem.current,
				animate,
				transition
			);
		}
	}, []);
	return React.createElement(
		"div",
		{ ref: currentElem },
		children ? children : React.createElement(React.Fragment, null)
	);
};
exports.Motion = Motion;
