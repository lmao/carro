$(document).ready(function() {
    $("#sidebarCollapse").on("click", function() {
      $("#sidebar").addClass("active");
    });
  
    $("#sidebarCollapseX").on("click", function() {
      $("#sidebar").removeClass("active");
    });
  
    $("#sidebarCollapse").on("click", function() {
      if ($("#sidebar").hasClass("active")) {
        $(".overlay").addClass("visible");
        console.log("it's working!");
      }
    });
  
    $("#sidebarCollapseX").on("click", function() {
      $(".overlay").removeClass("visible");
    });
  });
  //
  $(document).ready(function () {
    $("#sidebarCollapseFilter").on("click", function () {
      $("#sidebarfilter").addClass("active");
    });
  
    $("#sidebarCollapseXFilter").on("click", function () {
      $("#sidebarfilter").removeClass("active");
    });
  
    $("#sidebarCollapseFilter").on("click", function () {
      if ($("#sidebarfilter").hasClass("active")) {
        $(".overlay").addClass("visible");
        console.log("it's working!");
      }
    });
  
    $("#sidebarCollapseXFilter").on("click", function () {
      $(".overlay").removeClass("visible");
    });
  });
  //
 function collision($div1, $div2) {
      var x1 = $div1.offset().left;
      var w1 = 40;
      var r1 = x1 + w1;
      var x2 = $div2.offset().left;
      var w2 = 40;
      var r2 = x2 + w2;
        
      if (r1 < x2 || x1 > r2) return false;
      return true;
      
    }
    
// // slider call

$( function() {
$('#slider').slider({
  range: true,
  min: 0,
  max: 1000000,
  values: [ 0, 1000000 ],
  slide: function(event, ui) {
    
    $('.ui-slider-handle:eq(0) .price-range-min').html('от C' + ui.values[ 0 ]);
    $('.ui-slider-handle:eq(1) .price-range-max').html('до C' + ui.values[ 1 ]);
    $('.price-range-both').html('<i>C' + ui.values[ 0 ] + ' - </i>C' + ui.values[ 1 ] );
    
    //
    
    if ( ui.values[0] == ui.values[1] ) {
      $('.price-range-both i').css('display', 'none');
    } else {
      $('.price-range-both i').css('display', 'inline');
    }
        
        //
    
    if (collision($('.price-range-min'), $('.price-range-max')) == true) {
      $('.price-range-min, .price-range-max').css('opacity', '0');  
      $('.price-range-both').css('display', 'block');   
    } else {
      $('.price-range-min, .price-range-max').css('opacity', '1');  
      $('.price-range-both').css('display', 'none');    
    }
    
  }
});

$('.ui-slider-range').append('<span class="price-range-both value"><i>C' + $('#slider').slider('values', 0 ) + ' - </i>' + $('#slider').slider('values', 1 ) + '</span>');

$('.ui-slider-handle:eq(0)').append('<span class="price-range-min value">от C' + $('#slider').slider('values', 0 ) + '</span>');

$('.ui-slider-handle:eq(1)').append('<span class="price-range-max value">до C' + $('#slider').slider('values', 1 ) + '</span>');
});