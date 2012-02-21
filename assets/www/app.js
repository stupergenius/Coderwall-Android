Ext.Loader.setConfig({
	enabled: true,
	paths: {
		Ext: 'libs/touch2/src',
		Coderwall: 'app',
	}
});

Ext.application({
    name: 'Coderwall',
    
    models: [
    	'Coder',
    	'Badge',
    ],
    
    controllers: [
    	'Main',
    	'Coder',
    	'About',
    ],
    
    views: [
    	'Main',
    	'Coder',
    	'About',
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
