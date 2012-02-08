Ext.define('Coderwall.view.Main', {
	extend: 'Ext.Panel',
	xtype: 'main',

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
			}, {
				xtype: 'formpanel',
				itemId: 'searchform',
				
				items: [
				    {
				        xtype: 'fieldset',
                        title: 'Coderwall Lookup',
                        instructions: 'Please enter a Coderwall username above.',
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
