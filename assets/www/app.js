Ext.Loader.setConfig({
	enabled: false,
	paths: {
		Coderwall: 'app',
	},
});

Ext.application({
    name: 'Coderwall',

    stores: [
    	'Coder',
    ],
    
    models: [
    	'Coder',
    ],
    
    controllers: [
    	'Main',
    	'Coder',
    ],
    
    viewport: {
    	autoMaximize: false,
    	preventZooming: false,
    },
    
    launch: function() {
        Ext.Viewport.add({
            xclass: 'Coderwall.view.Main'
        });
    },
});
