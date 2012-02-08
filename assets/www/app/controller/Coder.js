Ext.define('Coderwall.controller.Coder', {
    extend: 'Ext.app.Controller',
    
    views: [
    	'Coder',
    ],
    
    config: {
        refs: {
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
        
        this.getMain().add({
            xtype: 'coder',
            model: coder,
        });
    },
    
    onBackTap: function() {
        console.log('going back');
        this.redirectTo('/'); // i dunno
    }
});
