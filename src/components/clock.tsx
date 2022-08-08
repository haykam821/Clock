import { DEGREES_PER_SECOND, SECONDS_PER_MINUTE } from "../util/constants";

import { CLOCK_BACKGROUND } from "../util/colors";
import DigitalText from "./digital-text";
import { FORMATTER } from "../util/formatter";
import Pill from "./pill";
import React from "react";
import styled from "styled-components";

interface ClockProps {
	className?: string;
}

interface ClockState {
	digital: string;
	seconds: number;
}

class ClockUnstyled extends React.Component<ClockProps, ClockState> {
	private timer: NodeJS.Timer | null = null;

	constructor(props: ClockProps) {
		super(props);

		this.state = this.computeClockState();

		this.updateClockState = this.updateClockState.bind(this);
		this.renderPill = this.renderPill.bind(this);
	}

	componentDidMount(): void {
		this.timer = setInterval(this.updateClockState);
	}

	componentWillUnmount(): void {
		if (this.timer !== null) {
			clearInterval(this.timer);
		}
	}

	private updateClockState(): void {
		this.setState(this.computeClockState());
	}

	private computeClockState(): ClockState {
		const date = new Date();

		return {
			digital: FORMATTER.format(date),
			seconds: date.getSeconds(),
		};
	}

	render(): JSX.Element {
		const pills = new Array(SECONDS_PER_MINUTE)
			.fill(null)
			.map(this.renderPill);

		return <div className={this.props.className}>
			<div>
				{pills}
			</div>

			<DigitalText>
				{this.state.digital}
			</DigitalText>
		</div>;
	}

	private renderPill(_: null, index: number): JSX.Element {
		return <Pill key={index} angle={index * DEGREES_PER_SECOND} active={this.isActive(index)} />;
	}

	private isActive(index: number): boolean {
		return this.state.seconds === SECONDS_PER_MINUTE - 1 || index <= this.state.seconds;
	}
}

export default styled(ClockUnstyled)`
	aspect-ratio: 1;
	height: 90vmin;

	display: flex;
	justify-content: center;
	align-items: center;

	position: fixed;

	background: ${CLOCK_BACKGROUND};
	border-radius: 50%;
`;
