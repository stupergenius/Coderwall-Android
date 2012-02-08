Ext.define('Coderwall.view.Coder', {
	extend: 'Ext.Panel',
	xtype: 'coder',
	
	config: {
		fullscreen: true,
		layout: 'fit',
		
		model: undefined,
		
		items: [
			{
				xtype: 'toolbar',
				docked: 'top',
				itemId: 'title',
				title: {
	        		title: 'Reminder Details',
	        		centered: true,
	        	},
				items: [
					{
						itemId: 'backButton',
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
						itemId: 'coderName',
						html: 'Shazam',
					},
					{
						xtype: 'label',
						itemId: 'coderLocation',
						html: 'Earth',
					},
					{
						xtype: 'label',
						itemId: 'numBadges',
						html: '0',
					},
				],
			}
		]
	},
	
	setModel: function(coder) {
		this.model = coder;
		
		if (typeof reminder != 'undefined') {
			this.down('#coderName').update(coder.get('title'));
			this.down('#coderLocation').update(coder.get('location'));
		}
	},
	
	getModel: function() {
		return this.model;
	}
});