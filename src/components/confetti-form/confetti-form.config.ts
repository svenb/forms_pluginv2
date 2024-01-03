import { type PluginContract } from '@nintex/form-plugin-contract';

export const config: PluginContract = {
	controlName: '__pluginControlName__',
	groupName: '__pluginGroupName__',
	fallbackDisableSubmit: false,
	description: 'Enjoy the Confetti on the Form to celebrate',
	version: '1.0',
	properties: {
		partyText: {
			type: 'string',
			title: 'Enter your Text here',
		},
	},
	events: ['ntx-value-change'],
	standardProperties: {
		fieldLabel: true,
		description: true,
		defaultValue: true,
		readOnly: true,
		visibility: true,
	},
};
