Ext.define('Coderwall.model.Badge', {
	extend: 'Ext.data.Model',
	
	config: {
		fields: [
			{name: 'name', type: 'string'},
			{name: 'description', type: 'string'},
			{name: 'badge', type: 'string'},
		],
		belongsTo: 'Coderwall.model.Coder',
	}
});
