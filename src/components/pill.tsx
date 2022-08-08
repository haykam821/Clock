import { ACTIVE, INACTIVE } from "../util/colors";

import React from "react";
import styled from "styled-components";

const SPACING = 0.6;

interface PillProps {
	className?: string;

	active: boolean;
	angle: number;
}

class PillUnstyled extends React.Component<PillProps, unknown> {
	render(): JSX.Element {
		return <div className={this.props.className}>
			|
		</div>;
	}
}

export default styled(PillUnstyled)`
	position: absolute;

	top: ${SPACING}%;
	left: 50%;

	height: ${100 - SPACING * 2}%;
	font-size: 5vmin;

	user-select: none;
	text-align: center;
	translate: -50%;

	transform: scaleX(280%);
	rotate: ${props => props.angle}deg;

	color: ${props => props.active ? ACTIVE : INACTIVE};
	transition: ${props => props.active && "color 0.15s"};
`;
