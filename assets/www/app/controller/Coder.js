Ext.define('Coderwall.controller.Coder', {
    extend: 'Ext.app.Controller',
    
	requires: [
		'Coderwall.view.Coder',
		'Ext.util.JSONP',
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
		loadingMask: {
			xtype: 'loadmask',
			message: 'Loading Coder...'
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
        coderComp.mask(this.getLoadingMask()); // show a loading mask
		coderComp.setModel(null); // reset the model
		Ext.Viewport.setActiveItem(coderComp); // and show the component before we start loading
        
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
