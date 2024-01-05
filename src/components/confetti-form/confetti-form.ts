import { type PluginContract } from '@nintex/form-plugin-contract';
import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
// eslint-disable-next-line import/no-extraneous-dependencies
import party from 'party-js';
import { config } from './confetti-form.config';
import { styles } from './confetti-form.styles';

@customElement('plugin-elementname')
export class Confetti extends LitElement {
	static getMetaConfig = (): Promise<PluginContract> | PluginContract => config;

	static override styles = styles;

	@property({ type: String })
	declare sampleProperty: string;

	@property({ type: Boolean })
	declare startPartyTrigger: boolean;

	@property({ type: String })
	declare typeofEffect: string;

	constructor() {
		super();
		this.sampleProperty = '';
	}

	override render() {
		if (this.startPartyTrigger === true) {
			this.startParty();
		}

		return html` <div id="party-container"></div> `;
	}

	// Function to start the party using party.js
	startParty() {
		const container = this.shadowRoot?.getElementById('party-container');

		if (container) {
			if (this.typeofEffect === 'Sparkle') {
				party.sparkles(container, {
					count: 50,
					speed: party.variation.range(50, 300),
				});
			} else {
				party.confetti(container, {
					count: party.variation.range(20, 60),
				});
			}
		}
	}
}
