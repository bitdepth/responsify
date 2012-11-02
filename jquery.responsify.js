/*!
 * jQuery lightweight plugin boilerplate
 * Original author: @ajpiano
 * Further changes, comments: @addyosmani
 * Licensed under the MIT license
 */

;(function ( $, window, document, undefined ) {

    var pluginName = 'responsify',
        defaults = {
            deviceWidths: [320, 480, 600, 768, 1024, 1280]
        };

    function Plugin( element, options ) {
        this.element = element;

        this.options = $.extend( {}, defaults, options) ;

        this._defaults = defaults;
        this._name = pluginName;

        this.init();
    }

    Plugin.prototype = {
        
        init: function() {

            console.log('init');

            if($('#responsify-wrapper').length > 0) {
                return
            }

            this.applyStyles();
            $('body').wrapInner('<div id="responsify-wrapper" />');


            var $target = $(this.element),
                self = this,
                widths = this.options.deviceWidths,
                $html = $('<ul id="width-menu"><div id="toggle-tab"><a href="#">R<small>s</small></a></div></ul>');

                $target.on('click', '#width-menu li', function(e){
                    $('#responsify-wrapper').width($(this).text() + 'px');
                    e.preventDefault();
                });
                
                for(width in widths){
                    $html.append('<li><a href="#">' + widths[width] + '</a></li>');
                    $('body').prepend($html);
                }


        }, 

        applyStyles : function(){
            var styles = '\
            body {margin:0; padding:0; }\
            #width-menu a {text-decoration:none;}\
            #width-menu {font-family: "Lucida Sans Unicode", "Lucida Grande", Verdana, Arial, Helvetica, sans-serif; float:left;margin:0 -4em 0 -4em;padding:0;width:4em;background:#ccc;background:rgba(100, 100, 100, 0.8);position:relative;}\
            #width-menu li {list-style:none;padding:0;text-align:center;}\
            #width-menu li a {color:#fff;font-size:0.9em;}\
            #width-menu #toggle-tab{position:absolute;right:-3em;top:0;line-height:3em;width:3em;height:3em;text-align:center;background:#ccc;background:rgba(100, 100, 100, 0.8);}\
            #width-menu #toggle-tab a{ color:#fff;font-size:2em;text-decoration:none;}\
            #width-menu #toggle-tab a small {font-size:0.5em;}\
            #width-menu:hover{margin-left:0;}\
            '; 

            $('head').append('<style type="text/css">' + styles + '</style>');      
        }
        
    };

    $.fn[pluginName] = function ( options ) {
        return this.each(function () {
            if (!$.data(this, 'plugin_' + pluginName)) {
                $.data(this, 'plugin_' + pluginName,
                new Plugin( this, options ));
            }
        });
    }

})( jQuery, window, document );