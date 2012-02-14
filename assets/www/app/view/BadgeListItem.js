/**
 * A simple list item to show a picture, name and cuteness value of a kitten, from the
 * {@link Example.store.Kittens} store.
 */
Ext.define('Coderwall.view.BadgeListItem', {
    extend: 'Ext.dataview.component.DataItem',
    xtype : 'badgelistitem',

    requires: [
        'Ext.Img',
    ],

    config: {
        cls: 'badge-list-item',

        dataMap: {
            //this will call: this.getImage()
            getImage: {
                //and then this will call: this.getImage().setSrc() with the
                //'image' field value form the record
                setSrc: 'badge',
            },

            getName: {
                setHtml: 'name',
            },
			
			getDescription: {
				setHtml: 'description',
			},
        },

        /**
         * @cfg {Boolean/Object/Ext.Img} image
         * The config for the image component used in this dataitem.
         * In this case, we just pass true, because we just want it to create
         * a new Ext.Img.
         */
        image: {
			height: 100,
			flex: 1,
		},
		
        /**
         * @cfg {Boolean/Object/Ext.Component} name
         * The component used to show an image. It is an Ext.Component, so we
         * just want to add a cls so we can style it, and add some flex so it
         * looks good.
         */
        name: {
            cls: 'x-name',
            flex: 1,
        },

        /**
         * @cfg {Boolean/Object/Ext.slider.Slider} slider
         * The slider component to show the cuteness of the kitten. We just want to
         * add some flex to make it look good.
         */
        description: {
            flex: 3,
        },

        /**
         * We give it a hbox layout so the items are horizontally displayed, and then
         * give it an align of center so they are vertically centered.
         */
        layout: {
            type: 'hbox',
            align: 'center'
        }
    },

    /**
     * Called when you set the {@link #image} configuration.
     *
     * Uses Ext.factory to return a proper instance using the configuration passed, the
     * default component, and the existing instance (if it exists).
     *
     * This should *never* be called manually. It will be called when you call {@link #setImage}.
     */
    applyImage: function(config) {
        return Ext.factory(config, 'Ext.Img', this.getImage());
    },

    /**
     * Called when you set the {@link #image} configuration, and is passed both the new value
     * (from applyImage) and the old value.
     *
     * This should *never* be called manually. It will be called when you call {@link #setImage}.
     * @private
     */
    updateImage: function(newImage, oldImage) {
        if (newImage) {
            this.add(newImage);
        }

        if (oldImage) {
            this.remove(oldImage);
        }
    },

    /**
     * Called when you set the {@link #name} configuration.
     *
     * Uses Ext.factory to return a proper instance using the configuration passed, the
     * default component, and the existing instance (if it exists).
     *
     * This should *never* be called manually. It will be called when you call {@link #setName}.
     * @private
     */
    applyName: function(config) {
        return Ext.factory(config, 'Ext.Component', this.getName());
    },

    /**
     * Called when you set the {@link #name} configuration, and is passed both the new value
     * (from applyName) and the old value.
     *
     * This should *never* be called manually. It will be called when you call {@link #setName}.
     * @private
     */
    updateName: function(newName, oldName) {
        if (newName) {
            this.add(newName);
        }

        if (oldName) {
            this.remove(oldName);
        }
    },

    applyDescription: function(config) {
        return Ext.factory(config, 'Ext.Component', this.getDescription());
    },

    updateDescription: function(newDescription, oldDescription) {
        if (newDescription) {
            this.add(newDescription);
        }

        if (oldDescription) {
            this.remove(oldDescription);
        }
    }
});