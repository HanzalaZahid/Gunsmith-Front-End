$(document).ready(
    function()
    {
        $('header>.popup_nav>.popup_nav_container>.head>.cross>i').click(
            function()
            {
                $('header>.popup_nav').css('display','none');
                $('body>*').css('display','block');
                $('body>script').css('display','none');
            }
        )
        $('header>.top>.section_wrapper>.icons>.menu').click(
            function()
            {
                $('body>*').css('display','none');
                $('body>header').css('display','block');
                $('header>.popup_nav').css('display','block');
            }
        )


        $('.section_articles>.section_wrapper>.artcile_container>.article').click(
            function()
            {
                location.href= "./simple_blog.html";
            }
        )
    }
)