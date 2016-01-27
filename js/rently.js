$(document).ready(function () {

    swiper();
    emailResult();
    smoothScroll();
    srcollSpy();
    smoothAnchor();
    styleSelect();

});

$('body').on('submit', '#newsletter', function (e) {
    e.preventDefault();
    var $form = $(this);

    $.ajax({
        type: $form.attr('method'),
        url: $form.attr('action'),
        data: $form.serialize(),

        success: function () {
            if ($form.find('.has-warning').hasClass('has-warning') != 1) {
                $form.find('input').attr('disabled', 'disabled');
                $('.section-subscribe h2').fadeOut('fast' , function() {
                    $(this).html('Thanks for signing up!').fadeIn('slow');
                })
            }
        }
    });

    return false;

});

$('body').on('submit', '#form-contact', function (e) {
    e.preventDefault();
    var $form = $(this);
    $.ajax({
        type: $form.attr('method'),
        url: $form.attr('action'),
        data: $form.serialize(),

        success: function () {
            if ($form.find('.has-warning').hasClass('has-warning') != 1){
                $form.trigger('reset');
                $('#modal-contact').modal('show');
            }
        }
    });
    return false;
});

$('.registration-button').on('click', function () {
    modalShowCard();
});

function modalShowCard() {
    var a = location.href;
    var number = $('.form-card #number').attr('name');
    var name = $('.form-card #full-name').attr('name');
    var expiry = $('.form-card #expiry').attr('name');
    var cvc = $('.form-card #cvc').attr('name');

    if (a.indexOf(number) != -1 && a.indexOf(name) != -1 && a.indexOf(expiry) != -1 && a.indexOf(cvc) != -1) {
        if (a.indexOf(number + '=&') == -1 && a.indexOf(name + '=&') == -1 && a.indexOf(expiry + '=&') == -1 && a.indexOf(cvc + '=' + ' ') == -1) {
            $('#modal').modal('show');
        }
    }

}

function swiper() {
    $('.swiper-container').is(function () {
        var mySwiper = new Swiper(this, {
            // Optional parameters
            direction: 'horizontal',
            loop: true,
            grabCursor: true,
            pagination: '.swiper-pagination',
            paginationClickable: true
        });
    });
}

formCard();

function formCard() {
    $('.form-card').is(function () {
        $(this).card({
            container: '.card-wrapper',
            formSelectors: {
                numberInput: 'input[name="number"]',
                nameInput: 'input[name="full-name"]',
                expiryInput: 'input[name="expiry"]',
                cvcInput: 'input[name="cvc"]'
            },
            placeholders: {
                number: '**** **** **** ****',
                name: 'Arya Stark',
                expiry: '**/****',
                cvc: '***'
            }
        });
    });

}

function emailResult() {
    $('#email-result').is(function () {
        $(this).val($('#agent-email').html());
    });
}

function smoothScroll() {

    try {
        $.browserSelector();
        if ($("html").hasClass("chrome")) {
            $.smoothScroll();
        }
    } catch (err) {

    }
    ;
}

function srcollSpy() {
    $('#navbar-collapse').is(function () {
        $('body').scrollspy(
            {target: "#navbar-collapse", offset: 91}
        );
    });
}

function smoothAnchor() {
    $('.navbar-nav a:not(.button)').on('click', function () {
        event.preventDefault();

        var id = $(this).attr('href');
        var top = $(id).offset().top - $('.header').height();

        $('body, html').animate({
            scrollTop: top
        }, 1500)
    });
}


function styleSelect() {
    $('select').on('change', function () {
        if ($('select option:checked').val() != -1) {
            $(this).css('color', '#5c5c5c');
        }
    });
}





