define([
    "jquery"
  ], 
  function($) {
    "use strict";
  
      $(document).ready(function($){
        $(".form.subscribe").submit(function(e){
            alert('This is just a test');
            e.preventDefault(e);
        });
      });
      return;
  });