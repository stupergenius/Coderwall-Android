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
            }
        });
    },
    
    showMain: function() {
        Ext.Viewport.setActiveItem(this.getMain());
    },
    
    onLookupButton: function() {
        console.log('looking up coder '+this.getCoderField().getValue());
        
        this.getApplication().getHistory().add(Ext.create('Ext.app.Action', {
            url: 'coder/' + this.getCoderField().getValue()
        }));
    },
});
