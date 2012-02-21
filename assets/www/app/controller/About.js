Ext.define('Coderwall.controller.About', {
    extend: 'Ext.app.Controller',
    
	requires: [
		'Coderwall.view.About',
	],
    
    config: {
        refs: {
            about: {
                selector: 'about',
                xtype: 'about',
                autoCreate: true,
            },
            main: 'main',
        },
        routes: {
            'about': 'showAbout',
        },
    },
    
    init: function() {
        this.control({
            'about #backButton': {
                tap: this.onBackTap,
            }
        });
    },
    
    showAbout: function() {
    	console.log('showing about');
    	Ext.Viewport.setActiveItem(this.getAbout());
    },
    
    onBackTap: function() {
        console.log('going back');
        this.redirectTo('/');
    }
});
