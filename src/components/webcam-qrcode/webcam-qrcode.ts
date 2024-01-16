import { type PluginContract } from '@nintex/form-plugin-contract';
import { LitElement, PropertyValueMap, html } from 'lit';
import { customElement, property, query, state } from 'lit/decorators.js';
import QrScanner from 'qr-scanner';
import { config } from './webcam-qrcode.config';
import { styles } from './webcam-qrcode.styles';

@customElement('plugin-elementname')
export class CamQr extends LitElement {
	static getMetaConfig = (): Promise<PluginContract> | PluginContract => config;

	static override styles = styles;

	@property({ type: String })
	declare sampleProperty: string;

	@query('#video-source')
	videoElement!: HTMLVideoElement;

	@state() qrResultTest = '';

	@state() running = false;

	qrScanner?: QrScanner;

	override firstUpdated() {
		console.log(this.videoElement);

		this.qrScanner = new QrScanner(
			this.videoElement,
			(result) => console.log('decoded qr code:', result),
			{
				/* your options or returnDetailedScanResult: true if you're not specifying any other options */
			}
		);
	}

	constructor() {
		super();
		this.sampleProperty = '';
	}

	toggleScanner() {
		this.running = !this.running;
		if (this.qrScanner) {
			if (this.running) this.qrScanner.start();
			else this.qrScanner.stop();
		}
	}

	override render() {
		return html`
			<div>
				<h1>Hello</h1>
				<video
					controls
					poster="https://picsum.photos/320/240"
					width="320"
					height="240"
					id="video-source"
				></video>
				<br />
				<button
					id="test"
					@click=${this.toggleScanner}
					theme=${this.running ? 'error' : 'primary'}
				>
					${this.running ? 'Stop' : 'Start'}
				</button>
				<pre>${this.qrResultTest}</pre>
			</div>
		`;
	}
}
