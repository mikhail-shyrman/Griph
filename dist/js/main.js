$(function(){
    $('.popup-with-form').magnificPopup({
        type: 'inline',
        preloader: false,
        focus: '#name',

        // When elemened is focused, some mobile browsers in some cases zoom in
        // It looks not nice, so we disable it:
        callbacks: {
            beforeOpen: function() {
                if($(window).width() < 700) {
                    this.st.focus = false;
                } else {
                    this.st.focus = '#name';
                }
            }
        }
    });

    $('.btn_menu').click(function(){
        $('.menu ul').slideToggle();
    });
});

$("#menu, #btn_top, #btn_bottom").on("click","a", function (event) {
    //отменяем стандартную обработку нажатия по ссылке
    event.preventDefault();
    //забираем идентификатор бока с атрибута href
    var id  = $(this).attr('href'),
        //узнаем высоту от начала страницы до блока на который ссылается якорь
        top = $(id).offset().top;
    //анимируем переход на расстояние - top за 1500 мс
    $('body,html').animate({scrollTop: top}, 1500);
    ('body,html').animate({scrollTop: contact}, 1500);
});

$(function(){
 $("#btn_top").hide().removeAttr("href");
 if ($(window).scrollTop()>="550") $("#btn_top").fadeIn("slow")
 $(window).scroll(function(){
  if ($(window).scrollTop()<="550") $("#btn_top").fadeOut("slow")
  else $("#btn_top").fadeIn("slow")
 });
});