import { type PluginContract } from '@nintex/form-plugin-contract';
import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { config } from './sk-hello-world.config';
import { styles } from './sk-hello-world.styles';
import { addBootstrap } from '../../common/templates';

@customElement('plugin-elementname')
export class PageHighlight extends LitElement {
	static getMetaConfig = (): Promise<PluginContract> | PluginContract => config;

	static override styles = styles;

	@property({ type: String })
	declare color: string;

	@property({ type: String })
	declare message: string;

	@property({ type: String })
	declare apiKey: string;

	@property({ type: String })
	declare FormattedAdress: string;

	@property({ type: String })
	declare maptype: string;

	@property({ type: String })
	declare long: string;

	@property({ type: String })
	declare zoom: string;

	override render() {
		return html`
			${addBootstrap()}
			<link
				href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"
				rel="stylesheet"
				integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC"
				crossorigin="anonymous"
			/>
			<script
				src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"
				integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM"
				crossorigin="anonymous"
			></script>
			<div
				id="map-container-google-2"
				class="z-depth-1-half map-container"
				style="height: 500px"
			>
				<iframe
					title="Maps Canvas"
					src="https://www.google.com/maps/embed/v1/place?key=${this
						.apiKey}&q=${this.FormattedAdress}&maptype=${this
						.maptype}&zoom=${this.zoom}"
					frameborder="0"
					style="border:0"
					allowfullscreen
					>Google</iframe
				>
			</div>
		`;
	}
}
