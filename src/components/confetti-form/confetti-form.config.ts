import { type PluginContract } from '@nintex/form-plugin-contract';

export const config: PluginContract = {
	controlName: '__pluginControlName__',
	groupName: '__pluginGroupName__',
	fallbackDisableSubmit: false,
	description: 'Enjoy the Confetti on the Form to celebrate',
	version: '1.0',
	properties: {
		startPartyTrigger: {
			type: 'boolean',
			title: 'Enable the Effect',
		},
		typeofEffect: {
			type: 'string',
			enum: ['Confetti', 'Sparkle'],
			title: 'Select the Effect	',
		},
	},
	events: ['ntx-value-change'],
	standardProperties: {
		fieldLabel: true,
		defaultValue: true,
	},
};
