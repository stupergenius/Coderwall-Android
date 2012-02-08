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
        console.log('looking up coder '+username);
        
        var coderComp = this.getCoder();
        coderComp.mask({message: 'Loading Coder...'});
        
        Ext.util.JSONP.request({
            //we give it the url to the free worldweatheronline.com api
            url: 'http://coderwall.com/' + username + '.json',
            callbackKey: 'callback',
            callback: function(result) {
                coderComp.unmask();
                
                if (result) {
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
