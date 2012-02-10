Ext.define('Coderwall.view.Coder', {
	extend: 'Ext.Panel',
	xtype: 'coder',
	
	requires: [
		'Coderwall.view.BadgeListItem',
	],
	
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
	        		title: 'Coder Details',
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
						tpl: 'Name: {name}',
					},
					{
						xtype: 'label',
						itemId: 'coderLocation',
						tpl: 'Location: {location}',
					},
					{
						xtype: 'dataview',
						itemId: 'badgeList',
						defaultType: 'badgelistitem',
						useComponents: true,
						flex: 1,
					},
				],
			}
		]
	},
	
	setModel: function(coder) {
		this.model = coder;
		
		if (typeof coder != 'undefined') {
			this.down('#coderName').setData(coder.getData());
			this.down('#coderLocation').setData(coder.getData());
			this.down('#badgeList').setStore(coder.badges());
		}
	},
	
	getModel: function() {
		return this.model;
	}
});
