Ext.define('Coderwall.controller.Main', {
    extend: 'Ext.app.Controller',
    
    config: {
        refs: {
            main: 'main',
            coderField: 'main #coderField',
        },
        routes: {
            '/': 'showMain',
        }
    },
    
    init: function() {
        this.control({
            'main #lookupButton': {
                tap: this.onLookupButton,
            },
            'main #infoButton': {
                tap: this.onInfoButton,
            },
        });
    },
    
    showMain: function() {
        Ext.Viewport.setActiveItem(this.getMain());
    },
    
    onInfoButton: function() {
    	console.log('redirecting to about');
        this.redirectTo('about');
    },
    
    onLookupButton: function() {
        console.log('looking up coder '+this.getCoderField().getValue());
        
        this.redirectTo('coder/' + this.getCoderField().getValue());
    },
});
