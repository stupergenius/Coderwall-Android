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
						itemId: 'numEndorsements',
						html: '0',
					},
				],
			}
		]
	},
	
	setModel: function(coder) {
		this.model = coder;
		
		if (typeof coder != 'undefined') {
			this.down('#coderName').setHtml(coder.get('name'));
			this.down('#coderLocation').setHtml(coder.get('location'));
			this.down('#numEndorsements').setHtml(coder.get('endorsements'));
		}
	},
	
	getModel: function() {
		return this.model;
	}
});
