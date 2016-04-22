var JS = JS || {};

JS.common = {
    circle: (function () {
        return {
            over: function (target) {
                var targetText = $(target).find('span');

                targetText.eq(0).css('display', 'none');
                targetText.eq(1).css('display', 'table-cell');
            },
            out: function (target) {
                var targetText = $(target).find('span');

                targetText.eq(0).css('display', 'table-cell');
                targetText.eq(1).css('display', 'none');
            }
        }
    })(),
    slideUp: function (target) {
        if ($(target).hasClass('jsc-slide-up')) {
            $(target).removeClass('jsc-slide-up');
            $('.member-list').find('.slide-up').children('.tl').css('bottom', '-100%');
        } else {
            $(target).addClass('jsc-slide-up');
            $('.member-list').find('.slide-up').children('.tl').css('bottom', 0);
        }
    },
    pageLink: function (target) {
        var targetHref = $(target).attr('href'),
            targetObj = $(targetHref == "#" || targetHref == "" ? 'html' : targetHref),
            position = targetObj.offset().top - 20;

        if (position > $('body').scrollTop()) {
            $('html, body').scrollTop(position - 400).animate({scrollTop: position}, 200);
        } else {
            $('html, body').scrollTop(position + 400).animate({scrollTop: position}, 200);
        }
    },
    scroll: (function () {
        var topBtn = $('#top-link');
        $(window).scroll(function () {
            if ($(this).scrollTop() > 200) {
                topBtn.fadeIn();
            } else {
                topBtn.fadeOut();
            }
        })
    })(),
    validate: (function () {
        $("#form").validate({
            rules : {
                name: { required: true },
                tel: { required: true },
                email: { required: true },
                skill: { required: true },
                pr: { required: true },
            },
            errorClass: "validation-block",
            highlight: function(error) {
                $(error).closest('div').addClass('has-error');
            },
            success: function(error) {
                $(error).closest('.has-error').removeClass('has-error');
            },
            submitHandler: function(form) {
                $('#modal').modal('show');
            }
        });
    })(),
    formSubmit: function (target) {
        $.ajax({
            type: "POST",
            url: "http://kurumi-inc.com/recruit/send.php",
            data: $('#form').serializeArray(),
            success: function(response) {
                location.href = 'http://kurumi-inc.com/recruit/complete.html';
            }
        });
    },
    sliderInit: (function () {
        $('.jsc-slider').slick({
            dots: false,
            slidesToShow: 4,
            slidesToScroll: 1,
            infinite: true,
            draggable: true,
            responsive:[{
                breakpoint: 767,
                settings:{
                    slidesToShow: 2,
                    slidesToScroll: 2,
                }
            }]
        });
    })()
}

$('.circle').on('mouseover', function () {
    JS.common.circle.over(this);
}).on('mouseout', function () {
    JS.common.circle.out(this);
})

$('.jsc-slide-text').on('click', function (e) {
    e.preventDefault();
    JS.common.slideUp(this);
})

$('.jsc-page-link').on('click', function (e) {
    e.preventDefault();
    JS.common.pageLink(this);
})

$('.jsc-submit').on('click', function (e) {
    JS.common.formSubmit();
})