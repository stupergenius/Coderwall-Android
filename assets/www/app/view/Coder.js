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
						itemTpl: '<table>' +
								'<tr>' +
									'<td rowspan="2" align="center">' +
									   '<img width="100" height="100" src="{badge}" />' +
									'</td>' +
									'<td style="font-weight: bold;">{name}</td>' +
								'</tr>' +
								'<tr>' +
								   '<td>' +
									   '<table>' +
										   '<tr>' +
											  '<td>{description}</td>' +
											'</tr>' +
										'</table>' +
									'</td>' +
							   '</tr>' +
						  '</table>',
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
