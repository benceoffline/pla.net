window.onscroll = function(ev) {
  var scrollTop = $(window).scrollTop();
  var docHeight = $(document).height();
  var winHeight = $(window).height();
  var scrollPercent = (scrollTop) / (docHeight - winHeight);
  var scrollPercentRounded = Math.round(scrollPercent*100);

    if (scrollPercentRounded > 90) {
         document.getElementById("overlayh2").style.color = "white"; 
         
    }
    else    
    {
        document.getElementById("overlayh2").style.color = "#2F6BC9"; 
    }
};