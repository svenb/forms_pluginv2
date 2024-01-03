import { type PluginContract } from '@nintex/form-plugin-contract';

export const config: PluginContract = {
	controlName: '__pluginControlName__',
	groupName: '__pluginGroupName__',
	fallbackDisableSubmit: false,
	description: 'Show a Google Map on the Form Canvas',
	version: '2.0',
	properties: {
		apiKey: {
			type: 'string',
			title: 'API Key',
			description: 'Please enter your Google API Key',
		},
		FormattedAdress: {
			type: 'string',
			title: 'Formatted Adress',
			description:
				'Please add the "formatedadress" variable from the adress control',
		},
		PlaceHolder: {
			type: 'string',
			title: 'Placeholder Text',
			description:
				'If the Adress is missing, the Text will be showned instead of an Error Message from Google ',
		},
		maptype: {
			title: 'Map Type',
			type: 'string',
			enum: ['roadmap', 'satellite'],
			showAsRadio: false,
			verticalLayout: true,
			defaultValue: 'roadmap',
			description: 'Choose your Map Type: roadmap and satellite',
		},
		zoom: {
			title: 'Zoom',
			type: 'string',
			enum: [
				'1',
				'2',
				'3',
				'4',
				'5',
				'6',
				'7',
				'8',
				'9',
				'10',
				'11',
				'12',
				'13',
				'14',
				'15',
				'16',
				'17',
				'18',
				'19',
				'21',
			],
			showAsRadio: false,
			verticalLayout: true,
			defaultValue: '11',
			description:
				'Values from 0 (the whole world) to 21 (individual buildings). The upper limit may vary depending on the map data for the selected location.',
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
