Ext.define('Coderwall.view.Coder', {
	extend: 'Ext.Panel',
	xtype: 'coder',
	
	requires: [
		'Coderwall.view.BadgeListItem',
		'Ext.dataview.List',
		'Ext.Label',
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
						xtype: 'list',
						itemId: 'badgeList',
						disableSelection: true,
						itemTpl: '<div><img style="float: left; margin-right: 5px;" src="{badge}" width="100" height="100" /><span><span style="font-weight: bold">{name}</span><br/>{description}</span><div style="clear: both"></div></div>',
						flex: 1,
					},
				],
			}
		]
	},
	
	setAllHidden: function(hidden) {
		this.down('#coderName').setHidden(hidden);
		this.down('#coderLocation').setHidden(hidden);
		this.down('#badgeList').setHidden(hidden);
	},
	
	setModel: function(coder) {
		this.model = coder;
		
		if (typeof coder != 'undefined' && coder != null) {
			this.setAllHidden(false);
			this.down('#coderName').setData(coder.getData());
			this.down('#coderLocation').setData(coder.getData());
			this.down('#badgeList').setStore(coder.badges());
		} else {
			this.setAllHidden(true);
		}
	},
	
	getModel: function() {
		return this.model;
	}
});
