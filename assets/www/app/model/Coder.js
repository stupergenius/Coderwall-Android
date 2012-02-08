Ext.define('Coderwall.model.Coder', {
	extend: 'Ext.data.Model',
	
	fields: [
         {name: 'name', type: 'string'},
    ],
    
    hasMany:'MeM.model.Result'
});