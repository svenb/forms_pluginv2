import { type PluginContract } from '@nintex/form-plugin-contract';

export const config: PluginContract = {
	controlName: '__pluginControlName__',
	groupName: '__pluginGroupName__',
	fallbackDisableSubmit: false,
	description: 'This Plugin give you the possibility to take pictures or scan a QR Code',
	version: '1.0',
	properties: {
		sampleProperty: {
			type: 'string',
			title: 'Sample Property',
		},
		value: {
			type: 'string',
			title: 'Value',
			isValueField: true,
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
