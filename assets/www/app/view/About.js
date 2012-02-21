Ext.define('Coderwall.view.About', {
	extend: 'Ext.Panel',
	xtype: 'about',
	
	requires: [
		'Ext.Label',
	],
	
	config: {
		fullscreen: true,
		layout: 'fit',
		
		items: [
			{
				xtype: 'toolbar',
				docked: 'top',
				itemId: 'title',
				title: {
	        		title: 'About',
	        		centered: true,
	        	},
				items: [
					{
						itemId: 'backButton',
						xtype: 'button',
						ui: 'back',
						text: 'Back',
					},
				]
			},
			{
				xtype: 'panel',
				layout: 'vbox',
				items: [
					{
						xtype: 'label',
						itemId: 'aboutText',
						margin: 10,
						html: 'I made this app for jollies. Ideally when new '+
							'features are rolled out to the API, I will update '+
							'this app to include them. If you like the app, or '+
							'couldn&apos;t imagine your life without '+
							'<a href="http://www.bensnider.com" target="_blank">bensnider.com</a>, '+
							'then please, <a href="https://www.paypal.com/cgi-bin/webscr?cmd=_donations&business=K3RT5PFU7JR5N&lc=US&no_note=0&cn=Tell%20me%20more%2e%2e%2e&no_shipping=1&currency_code=USD&bn=PP%2dDonationsBF%3abtn_donate_SM%2egif%3aNonHosted" target="_blank">'+
							'donate me</a> some beer monies.',
					},
				],
			}
		]
	},
});
