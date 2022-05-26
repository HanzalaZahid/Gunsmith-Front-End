$(document).ready(function(){
    $('.menu_toggle_open').click(function(){
        $('.admin_nav .toggle_item').css("display", "flex");
        $('.menu_toggle_open').hide();
        $('.menu_toggle_close').show();
        // $('.section_admin').animate(paddingLeft)
        $('.section_case').addClass('section_case_nav');
      });
      $('.menu_toggle_close').click(function(){
        $('.admin_nav .toggle_item').css("display", "none");
        $('.menu_toggle_open').show();
        $('.menu_toggle_close').hide();
        $('.section_case').removeClass('section_case_nav');
      });
})