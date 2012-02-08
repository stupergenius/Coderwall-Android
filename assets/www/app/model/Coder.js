Ext.define('Coderwall.model.Coder', {
	extend: 'Ext.data.Model',
	
	fields: [
        {name: 'name', type: 'string'},
        {name: 'location', type: 'string'},
        {name: 'endorsements', type: 'int'},
    ],
});
