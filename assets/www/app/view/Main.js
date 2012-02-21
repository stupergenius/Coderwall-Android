Ext.define('Coderwall.view.Main', {
	extend: 'Ext.Panel',
	xtype: 'main',
	
	requires: [
		'Ext.form.FieldSet',
		'Ext.form.Panel',
	],

	config: {
		fullscreen: true,
		layout: {
			type: 'card',
		},
		items: [
			{
				xtype: 'toolbar',
				docked: 'top',
				title: 'Coderwall',
				
				items: [
					{xtype: 'spacer'},
					{
						itemId: 'infoButton',
						xtype: 'button',
						text: 'About',
					},
				],
			}, {
				xtype: 'formpanel',
				itemId: 'searchform',
				
				items: [
				    {
				        xtype: 'fieldset',
                        title: 'Coderwall Lookup',
                        instructions: 'Please enter a Coderwall username above (try bensnider). Data from Coderwall.',
                        defaults: {
                            labelWidth: '35%'
                        },
                        items: [
					        {
						        xtype: 'textfield',
						        itemId: 'coderField',
						        label: 'Coder',
						        name: 'username',
					        },
				        ],
				    },
				    {
				        xtype: 'button',
				        itemId: 'lookupButton',
				        text: 'Lookup',
				    },
				],
			},
		],
	},
});
