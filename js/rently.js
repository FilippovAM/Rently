$(document).ready(function () {

    swiper();
    //initialize swiper when document ready
    function swiper() {
        var mySwiper = new Swiper ('.swiper-container', {
            // Optional parameters
            direction: 'horizontal',
            loop: true,
            grabCursor: true,
            pagination: '.swiper-pagination',
            paginationClickable: true
        });
    }
});

function formCard() {
    $('.form-card').card({
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
}

formCard();

