import React from "react";
import styled from "styled-components";
import Clock from "./clock";

interface AppProps {
	className?: string;
}

class AppUnstyled extends React.Component<AppProps, unknown> {
	render(): JSX.Element {
		return <div className={this.props.className}>
			<Clock />
		</div>;
	}
}

export default styled(AppUnstyled)`
	font-family: 'SF Compact Rounded', 'SF Pro Rounded', ---apple-system, system-ui, BlinkMacSystemFont, 'Ubuntu', sans-serif, monospace;
	text-align: center;

	width: 100%;
	height: 100%;

	display: flex;
	justify-content: center;
	align-items: center;
`;
