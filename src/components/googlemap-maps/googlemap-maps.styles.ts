import { css } from 'lit';

export const styles = css`
	.map-container {
		overflow: hidden;
		padding-bottom: 56.25%;
		position: relative;
		height: 0;
	}
	.map-container iframe {
		left: 0;
		top: 0;
		height: 100%;
		width: 100%;
		position: absolute;
	}
`;