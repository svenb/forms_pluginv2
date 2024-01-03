import { type PluginContract } from '@nintex/form-plugin-contract';
import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { config } from './googlemap-maps.config';
import { styles } from './googlemap-maps.styles';
import { addBootstrap } from '../../common/templates';

@customElement('plugin-elementname')
export class GoogleMapCanvas extends LitElement {
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

	@property({ type: String })
	declare PlaceHolder: string;

	override render() {
		return html`
			${addBootstrap()}
			<div
				id="map-container-google-2"
				class="z-depth-1-half map-container"
				style="height: 500px"
			>
				${this.FormattedAdress
					? html` <iframe
							title="Maps Canvas"
							src="https://www.google.com/maps/embed/v1/place?key=${this
								.apiKey}&q=${this.FormattedAdress}&maptype=${this
								.maptype}&zoom=${this.zoom}"
							frameborder="0"
							style="border:0"
							allowfullscreen
							>Google</iframe
					  >`
					: html` <p>${this.PlaceHolder}</p> `}
			</div>
		`;
	}
}
