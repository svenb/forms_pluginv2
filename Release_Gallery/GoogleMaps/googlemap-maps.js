import {
	i,
	_ as _taggedTemplateLiteral,
	a as _decorate,
	s,
	e,
	x,
	b as addBootstrap,
	c as e$1,
	d as _inherits,
	f as _createSuper,
	g as _createClass,
	h as _classCallCheck,
	j as _assertThisInitialized,
} from './templates-350472ef.js';
var _templateObject$1,
	_templateObject,
	_templateObject2,
	_templateObject3,
	config = {
		controlName: 'Google Maps Map v2',
		groupName: 'Google Maps',
		fallbackDisableSubmit: !1,
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
				showAsRadio: !1,
				verticalLayout: !0,
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
				showAsRadio: !1,
				verticalLayout: !0,
				defaultValue: '11',
				description:
					'Values from 0 (the whole world) to 21 (individual buildings). The upper limit may vary depending on the map data for the selected location.',
			},
		},
		events: ['ntx-value-change'],
		standardProperties: {
			fieldLabel: !0,
			description: !0,
			defaultValue: !0,
			readOnly: !0,
			visibility: !0,
		},
	},
	styles = i(
		(_templateObject$1 =
			_templateObject$1 ||
			_taggedTemplateLiteral([
				'\n\t.map-container {\n\t\toverflow: hidden;\n\t\tpadding-bottom: 56.25%;\n\t\tposition: relative;\n\t\theight: 0;\n\t}\n\t.map-container iframe {\n\t\tleft: 0;\n\t\ttop: 0;\n\t\theight: 100%;\n\t\twidth: 100%;\n\t\tposition: absolute;\n\t}\n',
			]))
	),
	GoogleMapCanvas = _decorate(
		[e$1('googlemap-maps')],
		function (l, t) {
			return {
				F: (function () {
					_inherits(r, t);
					var o = _createSuper(r);
					function r() {
						var t;
						_classCallCheck(this, r);
						for (var e = arguments.length, a = new Array(e), i = 0; i < e; i++)
							a[i] = arguments[i];
						return (
							(t = o.call.apply(o, [this].concat(a))),
							l(_assertThisInitialized(t)),
							t
						);
					}
					return _createClass(r);
				})(),
				d: [
					{
						kind: 'field',
						static: !0,
						key: 'getMetaConfig',
						value: function () {
							return function () {
								return config;
							};
						},
					},
					{
						kind: 'field',
						static: !0,
						key: 'styles',
						value: function () {
							return styles;
						},
					},
					{
						kind: 'field',
						decorators: [e({ type: String })],
						key: 'color',
						value: void 0,
					},
					{
						kind: 'field',
						decorators: [e({ type: String })],
						key: 'message',
						value: void 0,
					},
					{
						kind: 'field',
						decorators: [e({ type: String })],
						key: 'apiKey',
						value: void 0,
					},
					{
						kind: 'field',
						decorators: [e({ type: String })],
						key: 'FormattedAdress',
						value: void 0,
					},
					{
						kind: 'field',
						decorators: [e({ type: String })],
						key: 'maptype',
						value: void 0,
					},
					{
						kind: 'field',
						decorators: [e({ type: String })],
						key: 'long',
						value: void 0,
					},
					{
						kind: 'field',
						decorators: [e({ type: String })],
						key: 'zoom',
						value: void 0,
					},
					{
						kind: 'field',
						decorators: [e({ type: String })],
						key: 'PlaceHolder',
						value: void 0,
					},
					{
						kind: 'method',
						key: 'render',
						value: function () {
							return x(
								(_templateObject =
									_templateObject ||
									_taggedTemplateLiteral([
										'\n\t\t\t',
										'\n\t\t\t<div\n\t\t\t\tid="map-container-google-2"\n\t\t\t\tclass="z-depth-1-half map-container"\n\t\t\t\tstyle="height: 500px"\n\t\t\t>\n\t\t\t\t',
										'\n\t\t\t</div>\n\t\t',
									])),
								addBootstrap(),
								this.FormattedAdress
									? x(
											(_templateObject2 =
												_templateObject2 ||
												_taggedTemplateLiteral([
													' <iframe\n\t\t\t\t\t\t\ttitle="Maps Canvas"\n\t\t\t\t\t\t\tsrc="https://www.google.com/maps/embed/v1/place?key=',
													'&q=',
													'&maptype=',
													'&zoom=',
													'"\n\t\t\t\t\t\t\tframeborder="0"\n\t\t\t\t\t\t\tstyle="border:0"\n\t\t\t\t\t\t\tallowfullscreen\n\t\t\t\t\t\t\t>Google</iframe\n\t\t\t\t\t  >',
												])),
											this.apiKey,
											this.FormattedAdress,
											this.maptype,
											this.zoom
									  )
									: x(
											(_templateObject3 =
												_templateObject3 ||
												_taggedTemplateLiteral([' <p>', '</p> '])),
											this.PlaceHolder
									  )
							);
						},
					},
				],
			};
		},
		s
	);
export { GoogleMapCanvas };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ29vZ2xlbWFwLW1hcHMuanMiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21wb25lbnRzL2dvb2dsZW1hcC1tYXBzL2dvb2dsZW1hcC1tYXBzLmNvbmZpZy50cyIsIi4uLy4uL3NyYy9jb21wb25lbnRzL2dvb2dsZW1hcC1tYXBzL2dvb2dsZW1hcC1tYXBzLnN0eWxlcy50cyIsIi4uLy4uL3NyYy9jb21wb25lbnRzL2dvb2dsZW1hcC1tYXBzL2dvb2dsZW1hcC1tYXBzLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHR5cGUgUGx1Z2luQ29udHJhY3QgfSBmcm9tICdAbmludGV4L2Zvcm0tcGx1Z2luLWNvbnRyYWN0JztcblxuZXhwb3J0IGNvbnN0IGNvbmZpZzogUGx1Z2luQ29udHJhY3QgPSB7XG5cdGNvbnRyb2xOYW1lOiAnX19wbHVnaW5Db250cm9sTmFtZV9fJyxcblx0Z3JvdXBOYW1lOiAnX19wbHVnaW5Hcm91cE5hbWVfXycsXG5cdGZhbGxiYWNrRGlzYWJsZVN1Ym1pdDogZmFsc2UsXG5cdGRlc2NyaXB0aW9uOiAnU2hvdyBhIEdvb2dsZSBNYXAgb24gdGhlIEZvcm0gQ2FudmFzJyxcblx0dmVyc2lvbjogJzIuMCcsXG5cdHByb3BlcnRpZXM6IHtcblx0XHRhcGlLZXk6IHtcblx0XHRcdHR5cGU6ICdzdHJpbmcnLFxuXHRcdFx0dGl0bGU6ICdBUEkgS2V5Jyxcblx0XHRcdGRlc2NyaXB0aW9uOiAnUGxlYXNlIGVudGVyIHlvdXIgR29vZ2xlIEFQSSBLZXknLFxuXHRcdH0sXG5cdFx0Rm9ybWF0dGVkQWRyZXNzOiB7XG5cdFx0XHR0eXBlOiAnc3RyaW5nJyxcblx0XHRcdHRpdGxlOiAnRm9ybWF0dGVkIEFkcmVzcycsXG5cdFx0XHRkZXNjcmlwdGlvbjpcblx0XHRcdFx0J1BsZWFzZSBhZGQgdGhlIFwiZm9ybWF0ZWRhZHJlc3NcIiB2YXJpYWJsZSBmcm9tIHRoZSBhZHJlc3MgY29udHJvbCcsXG5cdFx0fSxcblx0XHRQbGFjZUhvbGRlcjoge1xuXHRcdFx0dHlwZTogJ3N0cmluZycsXG5cdFx0XHR0aXRsZTogJ1BsYWNlaG9sZGVyIFRleHQnLFxuXHRcdFx0ZGVzY3JpcHRpb246XG5cdFx0XHRcdCdJZiB0aGUgQWRyZXNzIGlzIG1pc3NpbmcsIHRoZSBUZXh0IHdpbGwgYmUgc2hvd25lZCBpbnN0ZWFkIG9mIGFuIEVycm9yIE1lc3NhZ2UgZnJvbSBHb29nbGUgJyxcblx0XHR9LFxuXHRcdG1hcHR5cGU6IHtcblx0XHRcdHRpdGxlOiAnTWFwIFR5cGUnLFxuXHRcdFx0dHlwZTogJ3N0cmluZycsXG5cdFx0XHRlbnVtOiBbJ3JvYWRtYXAnLCAnc2F0ZWxsaXRlJ10sXG5cdFx0XHRzaG93QXNSYWRpbzogZmFsc2UsXG5cdFx0XHR2ZXJ0aWNhbExheW91dDogdHJ1ZSxcblx0XHRcdGRlZmF1bHRWYWx1ZTogJ3JvYWRtYXAnLFxuXHRcdFx0ZGVzY3JpcHRpb246ICdDaG9vc2UgeW91ciBNYXAgVHlwZTogcm9hZG1hcCBhbmQgc2F0ZWxsaXRlJyxcblx0XHR9LFxuXHRcdHpvb206IHtcblx0XHRcdHRpdGxlOiAnWm9vbScsXG5cdFx0XHR0eXBlOiAnc3RyaW5nJyxcblx0XHRcdGVudW06IFtcblx0XHRcdFx0JzEnLFxuXHRcdFx0XHQnMicsXG5cdFx0XHRcdCczJyxcblx0XHRcdFx0JzQnLFxuXHRcdFx0XHQnNScsXG5cdFx0XHRcdCc2Jyxcblx0XHRcdFx0JzcnLFxuXHRcdFx0XHQnOCcsXG5cdFx0XHRcdCc5Jyxcblx0XHRcdFx0JzEwJyxcblx0XHRcdFx0JzExJyxcblx0XHRcdFx0JzEyJyxcblx0XHRcdFx0JzEzJyxcblx0XHRcdFx0JzE0Jyxcblx0XHRcdFx0JzE1Jyxcblx0XHRcdFx0JzE2Jyxcblx0XHRcdFx0JzE3Jyxcblx0XHRcdFx0JzE4Jyxcblx0XHRcdFx0JzE5Jyxcblx0XHRcdFx0JzIxJyxcblx0XHRcdF0sXG5cdFx0XHRzaG93QXNSYWRpbzogZmFsc2UsXG5cdFx0XHR2ZXJ0aWNhbExheW91dDogdHJ1ZSxcblx0XHRcdGRlZmF1bHRWYWx1ZTogJzExJyxcblx0XHRcdGRlc2NyaXB0aW9uOlxuXHRcdFx0XHQnVmFsdWVzIGZyb20gMCAodGhlIHdob2xlIHdvcmxkKSB0byAyMSAoaW5kaXZpZHVhbCBidWlsZGluZ3MpLiBUaGUgdXBwZXIgbGltaXQgbWF5IHZhcnkgZGVwZW5kaW5nIG9uIHRoZSBtYXAgZGF0YSBmb3IgdGhlIHNlbGVjdGVkIGxvY2F0aW9uLicsXG5cdFx0fSxcblx0fSxcblx0ZXZlbnRzOiBbJ250eC12YWx1ZS1jaGFuZ2UnXSxcblx0c3RhbmRhcmRQcm9wZXJ0aWVzOiB7XG5cdFx0ZmllbGRMYWJlbDogdHJ1ZSxcblx0XHRkZXNjcmlwdGlvbjogdHJ1ZSxcblx0XHRkZWZhdWx0VmFsdWU6IHRydWUsXG5cdFx0cmVhZE9ubHk6IHRydWUsXG5cdFx0dmlzaWJpbGl0eTogdHJ1ZSxcblx0fSxcbn07XG4iLCJpbXBvcnQgeyBjc3MgfSBmcm9tICdsaXQnO1xuXG5leHBvcnQgY29uc3Qgc3R5bGVzID0gY3NzYFxuXHQubWFwLWNvbnRhaW5lciB7XG5cdFx0b3ZlcmZsb3c6IGhpZGRlbjtcblx0XHRwYWRkaW5nLWJvdHRvbTogNTYuMjUlO1xuXHRcdHBvc2l0aW9uOiByZWxhdGl2ZTtcblx0XHRoZWlnaHQ6IDA7XG5cdH1cblx0Lm1hcC1jb250YWluZXIgaWZyYW1lIHtcblx0XHRsZWZ0OiAwO1xuXHRcdHRvcDogMDtcblx0XHRoZWlnaHQ6IDEwMCU7XG5cdFx0d2lkdGg6IDEwMCU7XG5cdFx0cG9zaXRpb246IGFic29sdXRlO1xuXHR9XG5gO1xuIiwiaW1wb3J0IHsgdHlwZSBQbHVnaW5Db250cmFjdCB9IGZyb20gJ0BuaW50ZXgvZm9ybS1wbHVnaW4tY29udHJhY3QnO1xuaW1wb3J0IHsgTGl0RWxlbWVudCwgaHRtbCB9IGZyb20gJ2xpdCc7XG5pbXBvcnQgeyBjdXN0b21FbGVtZW50LCBwcm9wZXJ0eSB9IGZyb20gJ2xpdC9kZWNvcmF0b3JzLmpzJztcbmltcG9ydCB7IGNvbmZpZyB9IGZyb20gJy4vZ29vZ2xlbWFwLW1hcHMuY29uZmlnJztcbmltcG9ydCB7IHN0eWxlcyB9IGZyb20gJy4vZ29vZ2xlbWFwLW1hcHMuc3R5bGVzJztcbmltcG9ydCB7IGFkZEJvb3RzdHJhcCB9IGZyb20gJy4uLy4uL2NvbW1vbi90ZW1wbGF0ZXMnO1xuXG5AY3VzdG9tRWxlbWVudCgncGx1Z2luLWVsZW1lbnRuYW1lJylcbmV4cG9ydCBjbGFzcyBHb29nbGVNYXBDYW52YXMgZXh0ZW5kcyBMaXRFbGVtZW50IHtcblx0c3RhdGljIGdldE1ldGFDb25maWcgPSAoKTogUHJvbWlzZTxQbHVnaW5Db250cmFjdD4gfCBQbHVnaW5Db250cmFjdCA9PiBjb25maWc7XG5cblx0c3RhdGljIG92ZXJyaWRlIHN0eWxlcyA9IHN0eWxlcztcblxuXHRAcHJvcGVydHkoeyB0eXBlOiBTdHJpbmcgfSlcblx0ZGVjbGFyZSBjb2xvcjogc3RyaW5nO1xuXG5cdEBwcm9wZXJ0eSh7IHR5cGU6IFN0cmluZyB9KVxuXHRkZWNsYXJlIG1lc3NhZ2U6IHN0cmluZztcblxuXHRAcHJvcGVydHkoeyB0eXBlOiBTdHJpbmcgfSlcblx0ZGVjbGFyZSBhcGlLZXk6IHN0cmluZztcblxuXHRAcHJvcGVydHkoeyB0eXBlOiBTdHJpbmcgfSlcblx0ZGVjbGFyZSBGb3JtYXR0ZWRBZHJlc3M6IHN0cmluZztcblxuXHRAcHJvcGVydHkoeyB0eXBlOiBTdHJpbmcgfSlcblx0ZGVjbGFyZSBtYXB0eXBlOiBzdHJpbmc7XG5cblx0QHByb3BlcnR5KHsgdHlwZTogU3RyaW5nIH0pXG5cdGRlY2xhcmUgbG9uZzogc3RyaW5nO1xuXG5cdEBwcm9wZXJ0eSh7IHR5cGU6IFN0cmluZyB9KVxuXHRkZWNsYXJlIHpvb206IHN0cmluZztcblxuXHRAcHJvcGVydHkoeyB0eXBlOiBTdHJpbmcgfSlcblx0ZGVjbGFyZSBQbGFjZUhvbGRlcjogc3RyaW5nO1xuXG5cdG92ZXJyaWRlIHJlbmRlcigpIHtcblx0XHRyZXR1cm4gaHRtbGBcblx0XHRcdCR7YWRkQm9vdHN0cmFwKCl9XG5cdFx0XHQ8ZGl2XG5cdFx0XHRcdGlkPVwibWFwLWNvbnRhaW5lci1nb29nbGUtMlwiXG5cdFx0XHRcdGNsYXNzPVwiei1kZXB0aC0xLWhhbGYgbWFwLWNvbnRhaW5lclwiXG5cdFx0XHRcdHN0eWxlPVwiaGVpZ2h0OiA1MDBweFwiXG5cdFx0XHQ+XG5cdFx0XHRcdCR7dGhpcy5Gb3JtYXR0ZWRBZHJlc3Ncblx0XHRcdFx0XHQ/IGh0bWxgIDxpZnJhbWVcblx0XHRcdFx0XHRcdFx0dGl0bGU9XCJNYXBzIENhbnZhc1wiXG5cdFx0XHRcdFx0XHRcdHNyYz1cImh0dHBzOi8vd3d3Lmdvb2dsZS5jb20vbWFwcy9lbWJlZC92MS9wbGFjZT9rZXk9JHt0aGlzXG5cdFx0XHRcdFx0XHRcdFx0LmFwaUtleX0mcT0ke3RoaXMuRm9ybWF0dGVkQWRyZXNzfSZtYXB0eXBlPSR7dGhpc1xuXHRcdFx0XHRcdFx0XHRcdC5tYXB0eXBlfSZ6b29tPSR7dGhpcy56b29tfVwiXG5cdFx0XHRcdFx0XHRcdGZyYW1lYm9yZGVyPVwiMFwiXG5cdFx0XHRcdFx0XHRcdHN0eWxlPVwiYm9yZGVyOjBcIlxuXHRcdFx0XHRcdFx0XHRhbGxvd2Z1bGxzY3JlZW5cblx0XHRcdFx0XHRcdFx0Pkdvb2dsZTwvaWZyYW1lXG5cdFx0XHRcdFx0ICA+YFxuXHRcdFx0XHRcdDogaHRtbGAgPHA+JHt0aGlzLlBsYWNlSG9sZGVyfTwvcD4gYH1cblx0XHRcdDwvZGl2PlxuXHRcdGA7XG5cdH1cbn1cbiJdLCJuYW1lcyI6WyJjb25maWciLCJjb250cm9sTmFtZSIsImdyb3VwTmFtZSIsImZhbGxiYWNrRGlzYWJsZVN1Ym1pdCIsImRlc2NyaXB0aW9uIiwidmVyc2lvbiIsInByb3BlcnRpZXMiLCJhcGlLZXkiLCJ0eXBlIiwidGl0bGUiLCJGb3JtYXR0ZWRBZHJlc3MiLCJQbGFjZUhvbGRlciIsIm1hcHR5cGUiLCJlbnVtIiwic2hvd0FzUmFkaW8iLCJ2ZXJ0aWNhbExheW91dCIsImRlZmF1bHRWYWx1ZSIsInpvb20iLCJldmVudHMiLCJzdGFuZGFyZFByb3BlcnRpZXMiLCJmaWVsZExhYmVsIiwicmVhZE9ubHkiLCJ2aXNpYmlsaXR5Iiwic3R5bGVzIiwiY3NzIiwiX3RlbXBsYXRlT2JqZWN0IiwiX3RhZ2dlZFRlbXBsYXRlTGl0ZXJhbCIsIkdvb2dsZU1hcENhbnZhcyIsIl9kZWNvcmF0ZSIsImN1c3RvbUVsZW1lbnQiLCJfaW5pdGlhbGl6ZSIsIl9MaXRFbGVtZW50IiwiRiIsIl9pbmhlcml0cyIsIl9zdXBlciIsIl9jcmVhdGVTdXBlciIsIl90aGlzIiwiX2NsYXNzQ2FsbENoZWNrIiwiX2xlbiIsImFyZ3VtZW50cyIsImxlbmd0aCIsImFyZ3MiLCJBcnJheSIsIl9rZXkiLCJjYWxsIiwiYXBwbHkiLCJ0aGlzIiwiY29uY2F0IiwiX2Fzc2VydFRoaXNJbml0aWFsaXplZCIsIl9jcmVhdGVDbGFzcyIsImQiLCJraW5kIiwic3RhdGljIiwia2V5IiwidmFsdWUiLCJkZWNvcmF0b3JzIiwicHJvcGVydHkiLCJTdHJpbmciLCJodG1sIiwiYWRkQm9vdHN0cmFwIiwiX3RlbXBsYXRlT2JqZWN0MiIsIl90ZW1wbGF0ZU9iamVjdDMiLCJMaXRFbGVtZW50Il0sIm1hcHBpbmdzIjoidU5BRU8sd0VBQU1BLE9BQXlCLENBQ3JDQyxZQUFhLHFCQUNiQyxVQUFXLGNBQ1hDLHNCQUF1QixDQUFBLEVBQ3ZCQyxZQUFhLHVDQUNiQyxRQUFTLE1BQ1RDLFdBQVksQ0FDWEMsT0FBUSxDQUNQQyxLQUFNLFNBQ05DLE1BQU8sVUFDUEwsWUFBYSxrQ0FDYixFQUNETSxnQkFBaUIsQ0FDaEJGLEtBQU0sU0FDTkMsTUFBTyxtQkFDUEwsWUFDQyxrRUFDRCxFQUNETyxZQUFhLENBQ1pILEtBQU0sU0FDTkMsTUFBTyxtQkFDUEwsWUFDQyw2RkFDRCxFQUNEUSxRQUFTLENBQ1JILE1BQU8sV0FDUEQsS0FBTSxTQUNOSyxLQUFNLENBQUMsVUFBVyxhQUNsQkMsWUFBYSxDQUFBLEVBQ2JDLGVBQWdCLENBQUEsRUFDaEJDLGFBQWMsVUFDZFosWUFBYSw2Q0FDYixFQUNEYSxLQUFNLENBQ0xSLE1BQU8sT0FDUEQsS0FBTSxTQUNOSyxLQUFNLENBQ0wsSUFDQSxJQUNBLElBQ0EsSUFDQSxJQUNBLElBQ0EsSUFDQSxJQUNBLElBQ0EsS0FDQSxLQUNBLEtBQ0EsS0FDQSxLQUNBLEtBQ0EsS0FDQSxLQUNBLEtBQ0EsS0FDQSxNQUVEQyxZQUFhLENBQUEsRUFDYkMsZUFBZ0IsQ0FBQSxFQUNoQkMsYUFBYyxLQUNkWixZQUNDLDZJQUNGLENBQ0EsRUFDRGMsT0FBUSxDQUFDLG9CQUNUQyxtQkFBb0IsQ0FDbkJDLFdBQVksQ0FBQSxFQUNaaEIsWUFBYSxDQUFBLEVBQ2JZLGFBQWMsQ0FBQSxFQUNkSyxTQUFVLENBQUEsRUFDVkMsV0FBWSxDQUFBLENBQ2IsQ0FDRCxFQ3pFYUMsT0FBU0MsRUFBR0Msa0JBQUFBLG1CQUFBQyx1QkFjeEIsQ0FBQSxvUEFBQSxDQUFBLEVDUllDLGdCQUFlQyxVQUQzQkMsQ0FBQUEsSUFBYyxnQkFBb0IsR0FBQyxTQUFBQyxFQUFBQyxHQUNSLE1BQUEsQ0FBQUMsYUFBQUMsVUFBQU4sRUFBQUksQ0FBQSxFQUFBLElBQUFHLEVBQUFDLGFBQUFSLENBQUEsRUFBQSxTQUFBQSxJQUFBLElBQUFTLEVBQUFDLHFCQUFBVixDQUFBLEVBQUEsSUFBQSxJQUFBVyxFQUFBQyxVQUFBQyxPQUFBQyxFQUFBQyxJQUFBQSxNQUFBSixDQUFBLEVBQUFLLEVBQUEsRUFBQUEsRUFBQUwsRUFBQUssQ0FBQSxHQUFBRixFQUFBRSxHQUFBSixVQUFBSSxHQUFBLE9BQUFQLEVBQUFGLEVBQUFVLEtBQUFDLE1BQUFYLEVBQUEsQ0FBQVksTUFBQUMsT0FBQU4sQ0FBQSxDQUFBLEVBQUFYLEVBQUFrQix1QkFBQVosQ0FBQSxDQUFBLEVBQUFBLENBQUEsQ0FBQSxPQUFBYSxhQUFBdEIsQ0FBQSxDQUFBLEVBQUEsRUFBQXVCLEVBQUEsQ0FBQSxDQUFBQyxLQUFBLFFBQUFDLE9BQUEsQ0FBQSxFQUFBQyxJQUFBLGdCQUFBQyxpQkFBQSxPQUNKLFdBQUEsT0FBZ0R0RCxNQUFNLENBQUEsQ0FBQSxFQUFBLENBQUFtRCxLQUFBLFFBQUFDLE9BQUEsQ0FBQSxFQUFBQyxJQUFBLFNBQUFDLGlCQUFBLE9BRXBEL0IsTUFBTSxDQUFBLEVBQUEsQ0FBQTRCLEtBQUEsUUFBQUksV0FBQSxDQUU5QkMsRUFBUyxDQUFFaEQsS0FBTWlELE1BQU8sQ0FBQyxHQUFDSixJQUFBLFFBQUFDLE1BQUEsS0FBQSxDQUFBLEVBQUEsQ0FBQUgsS0FBQSxRQUFBSSxXQUFBLENBRzFCQyxFQUFTLENBQUVoRCxLQUFNaUQsTUFBTyxDQUFDLEdBQUNKLElBQUEsVUFBQUMsTUFBQSxLQUFBLENBQUEsRUFBQSxDQUFBSCxLQUFBLFFBQUFJLFdBQUEsQ0FHMUJDLEVBQVMsQ0FBRWhELEtBQU1pRCxNQUFPLENBQUMsR0FBQ0osSUFBQSxTQUFBQyxNQUFBLEtBQUEsQ0FBQSxFQUFBLENBQUFILEtBQUEsUUFBQUksV0FBQSxDQUcxQkMsRUFBUyxDQUFFaEQsS0FBTWlELE1BQU8sQ0FBQyxHQUFDSixJQUFBLGtCQUFBQyxNQUFBLEtBQUEsQ0FBQSxFQUFBLENBQUFILEtBQUEsUUFBQUksV0FBQSxDQUcxQkMsRUFBUyxDQUFFaEQsS0FBTWlELE1BQU8sQ0FBQyxHQUFDSixJQUFBLFVBQUFDLE1BQUEsS0FBQSxDQUFBLEVBQUEsQ0FBQUgsS0FBQSxRQUFBSSxXQUFBLENBRzFCQyxFQUFTLENBQUVoRCxLQUFNaUQsTUFBTyxDQUFDLEdBQUNKLElBQUEsT0FBQUMsTUFBQSxLQUFBLENBQUEsRUFBQSxDQUFBSCxLQUFBLFFBQUFJLFdBQUEsQ0FHMUJDLEVBQVMsQ0FBRWhELEtBQU1pRCxNQUFPLENBQUMsR0FBQ0osSUFBQSxPQUFBQyxNQUFBLEtBQUEsQ0FBQSxFQUFBLENBQUFILEtBQUEsUUFBQUksV0FBQSxDQUcxQkMsRUFBUyxDQUFFaEQsS0FBTWlELE1BQU8sQ0FBQyxHQUFDSixJQUFBLGNBQUFDLE1BQUEsS0FBQSxDQUFBLEVBQUEsQ0FBQUgsS0FBQSxTQUFBRSxJQUFBLFNBQUFDLE1BRzNCLFdBQ0MsT0FBT0ksRUFBSWpDLGdCQUFBQSxpQkFBQUMsdUJBQ1JpQyxDQUFBQSxXQUFBQSxvSkFBQUEsdUJBQUFBLEVBQUFBLGFBQWMsRUFNYmIsS0FBS3BDLGdCQUNKZ0QsRUFBSUUsaUJBQUFBLGtCQUFBbEMsdUJBRWtELENBQUEsa0hBQUEsTUFBQSxZQUFBLFNBQUEsZ0pBQUEsRUFBQW9CLEtBQ3BEdkMsT0FBWXVDLEtBQUtwQyxnQkFBMkJvQyxLQUM1Q2xDLFFBQWdCa0MsS0FBSzdCLElBQUksRUFNM0J5QyxFQUFJRyxpQkFBQUEsa0JBQUFuQyx1QkFBTyxDQUFBLE9BQUEsUUFBQSxFQUFBb0IsS0FBS25DLFdBQVcsQ0FBTyxDQUd4QyxDQUFDLEVBQUEsQ0FBQSxFQW5EbUNtRCxDQUFVIn0=
