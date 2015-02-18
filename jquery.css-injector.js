// CSS Injector - 1.0.0
// February 6, 2015
// The MIT License (MIT)
// Copyright (c) 2015 Dustin Dowell
// http://github.com/dustindowell22/css-injector
// =============================================


(function($) {
  $.fn.injectCSS = function(properties) {

    // Store object
    var $this  = $(this);

    // Create <style> element
    var $style = $('<style>');

    // Selector options
    var idName    = $this.prop('idName'),
        className = $this.prop('className'),
        tagName   = $this.prop('tagName');

    // Use least specific selector possible
    idName    = idName                       ? '#' + idName    : '';
    className = idName    === '' ? className ? '.' + className : '' : '';
    tagName   = className === '' ? tagName   ?       tagName   : '' : '';

    // Selector
    var selectorName = tagName + className + idName;

    // Inject CSS
    function injectCSS() {

      // Set array scope
      var css = [];

      // Clear styles before they're checked for updating
      $style.empty();

      // Loop through properties
      $.each(properties, function(i) {
        css = css + '  ' + properties[i] + ';\n';
      });

      // Add selector to CSS
      css = selectorName + ' {\n' + css  +'}';

      // If <style> has CSS remove it and append new CSS otherwise append new CSS to <body>
      return $style.text() ? $style.empty().append(css) : $style.append(css).appendTo('body');
    }

    // Execute during runtime
    injectCSS();
  };
})(jQuery);
