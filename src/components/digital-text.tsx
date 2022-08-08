import React from "react";
import styled from "styled-components";
import { DIGITAL_TEXT } from "../util/colors";
import DigitalSeparator from "./digital-separator";

const SEPARATOR = ":";
const SEPARATOR_EXPRESSION = new RegExp("(" + SEPARATOR + ")", "g");

interface DigitalTextProps {
	className?: string;
	children: string;
}

class DigitalTextUnstyled extends React.Component<DigitalTextProps, unknown> {
	render(): JSX.Element {
		return <div className={this.props.className}>
			{this.props.children.split(SEPARATOR_EXPRESSION).map(this.renderChild)}
		</div>;
	}

	private renderChild(child: string, index: number): JSX.Element {
		return child === SEPARATOR ? <DigitalSeparator key={index}>
			{child}
		</DigitalSeparator> : <div key={index}>
			{child}
		</div>;
	}
}

export default styled(DigitalTextUnstyled)`
	font-size: 25.6vmin;
	font-weight: 500;

	color: ${DIGITAL_TEXT};

	display: flex;
	justify-content: center;
	align-items: center;

	user-select: none;
`;
