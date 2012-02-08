Ext.define('Coderwall.controller.Main', {
    extend: 'Ext.app.Controller',
    
    views: [
    	'Main',
    ],
    
    config: {
        refs: {
            main: 'main',
            coderField: 'main #coderField',
        },
    },
    
    init: function() {
        this.control({
            'main #lookupButton': {
                tap: this.onLookupButton,
            }
        });
    },
    
    onLookupButton: function() {
        console.log('looking up coder '+this.getCoderField().getValue());
        
        this.getApplication().getHistory().add(Ext.create('Ext.app.Action', {
            url: 'coder/' + this.getCoderField().getValue()
        }));
    },
});
