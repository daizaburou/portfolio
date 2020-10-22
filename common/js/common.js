(function ($) {
   let mediaSp = matchMedia('(max-width: 767px)').matches;
   $(function(){
      $('a[href^="#"]').click(function() {
         let speed = 500; 
         let href= $(this).attr("href");
         let target = $(href == "#" || href == "" ? 'html' : href);
         let position = target.offset().top;
         $('body,html').animate({scrollTop:position}, speed, 'swing');
         if($('.btn-hamb').hasClass('active')){
            $('.nav-wrapper').removeClass('active');
            $('.btn-hamb').removeClass('active');
         }
         else{
            return false;
         }
         return false;
      });
   });

   $(document).ready(function() {
      if(mediaSp){
         return false;
      }
      let headerHeight = $('header').height();
      let pagetop = $('#to-top');
      $(window).scroll(function () {
         if ($(this).scrollTop() > headerHeight) {
            pagetop.fadeIn();
         } else {
            pagetop.fadeOut();
         }
      });
   });
   $(function(){
      $('.btn-hamb').on('click', function() {
        $(this).toggleClass('active');
        $(".nav-wrapper").toggleClass('active');
        return false;
      });
    });
}(jQuery));

