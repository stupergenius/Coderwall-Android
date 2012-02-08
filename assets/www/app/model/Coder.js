Ext.define('Coderwall.model.Coder', {
	extend: 'Ext.data.Model',
	
	config: {
		fields: [
			{name: 'username', type: 'string'},
			{name: 'name', type: 'string'},
			{name: 'location', type: 'string'},
			{name: 'endorsements', type: 'int'},
		],
		hasMany: [
			{model: 'Coderwall.model.Badge', name: 'badges'},
		],
	}
});
