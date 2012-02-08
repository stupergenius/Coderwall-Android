Ext.define('Coderwall.controller.Coder', {
    extend: 'Ext.app.Controller',
    
    views: [
    	'Coder',
    ],
    
    config: {
        refs: {
            coder: {
                selector: 'coder',
                xtype: 'coder',
                autoCreate: true,
            },
            main: 'main',
        },
        routes: {
            'coder/:username': 'showCoderByUsername',
        },
    },
    
    init: function() {
        this.control({
            'coder #backButton': {
                tap: this.onBackTap,
            }
        });
    },
    
    showCoderByUsername: function(username) {
        console.log('showing coder '+username);
        
        var coder = Coderwall.model.Coder.create();
        coder.set('name', 'Ben Snider');
        coder.set('location', 'Columbus, Ohio');
        
        this.getCoder().setModel(coder);
        Ext.Viewport.setActiveItem(this.getCoder());
    },
    
    onBackTap: function() {
        console.log('going back');
        this.redirectTo('/'); // i dunno
    }
});
