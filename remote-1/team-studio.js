///////staff///////////
$(document).ready(function () {


   $(".member").on({
  
    mouseover: function () {
      $(this).find(`.staff-first-layer`).addClass("staff-color-overlay");
      $(this).find(`.staff-none`).removeClass("staff-second-layer").addClass("staff-second-layer-show");
    },
    mouseout: function () {
      $(this).find(`.staff-first-layer`).removeClass("staff-color-overlay");
      $(this).find(`.staff-none`).addClass("staff-second-layer");
    }   
  });
});