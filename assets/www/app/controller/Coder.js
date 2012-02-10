Ext.define('Coderwall.controller.Coder', {
    extend: 'Ext.app.Controller',
    
	requires: [
		'Ext.util.JSONP',
	],
	
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
        console.log('looking up coder '+username);
        
        var coderComp = this.getCoder();
        coderComp.mask({message: 'Loading Coder...'});
        
        Ext.util.JSONP.request({
            url: 'http://coderwall.com/' + username + '.json',
            callbackKey: 'callback',
            callback: function(success, result, error) {
                coderComp.unmask();
                
                if (success) {
                    var coder = Ext.create('Coderwall.model.Coder', result.data);
                    console.log(coder);
                    console.log(coder.badges());
                    coderComp.setModel(coder);
                    Ext.Viewport.setActiveItem(coderComp);
                } else {
                	Ext.Msg.alert('Error', 'There was an error retrieving the coder.');
                }
            },
        });
    },
    
    onBackTap: function() {
        console.log('going back');
        this.redirectTo('/');
    }
});
