import React from "react";
import styled, { keyframes } from "styled-components";
import { DIGITAL_SEPARATOR_FROM, DIGITAL_SEPARATOR_TO } from "../util/colors";

const pulse = keyframes`
	0% {
		color: ${DIGITAL_SEPARATOR_FROM};
	}

	95% {
		color: ${DIGITAL_SEPARATOR_TO};
	}

	100% {
		color: ${DIGITAL_SEPARATOR_FROM};
	}
`;

interface DigitalSeparatorProps {
	className?: string;
	children: string;
}

class DigitalSeparatorUnstyled extends React.Component<DigitalSeparatorProps, unknown> {
	render(): JSX.Element {
		return <div className={this.props.className}>
			{this.props.children}
		</div>;
	}
}

export default styled(DigitalSeparatorUnstyled)`
	font-size: 22.4vmin;
	transform: translateY(-8.5%);

	animation-name: ${pulse};
	animation-duration: 1s;
	animation-iteration-count: infinite;
	animation-timing-function: ease-in;
`;
