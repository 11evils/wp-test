import './sass/fonts.sass';
import './sass/reset.sass';
import './scss/slick.scss'
import './sass/desktopMenu.sass';
import './sass/mainSection.sass';
import './sass/mainMenu.sass';
import './sass/mobileMenu.sass';
import './sass/modal.sass';
import './sass/services.sass';
import './sass/services-usl-santeh.sass';
import './sass/questions.sass';
import './sass/content.sass';
import './sass/new-content.sass';
import './sass/sliderOffers.sass';
import './sass/advantages.sass';
import './sass/aboutCompany.sass';
import './sass/contacts.sass';
import './sass/footer.sass';

import './css/humburger.css';

import 'slick-carousel';

//отложенная загрузка страницы
function init() {
    var imgDefer = document.getElementsByTagName('img');
    for (var i=0; i<imgDefer.length; i++) {
    if(imgDefer[i].getAttribute('data-src')) {
    imgDefer[i].setAttribute('src',imgDefer[i].getAttribute('data-src'));
    } } }
    window.onload = init;

jQuery(document).ready(function($) {
    $('.sliderOffers--slider').slick({
        // dots: true,
        arrows: false,
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear',
        autoplay: true
    });

    $('.showModal').click(function (e) { 
        e.preventDefault();
        $('.overlay').fadeIn();
        $('.overlay').css('display', 'flex');
        $('.textFromButton').text($(this).attr('data-modalTitle'));
    });

    // $('.showModal').click(function (e) { 
    //     e.preventDefault();
    //     $('.overlay').fadeIn();
    //     $('.overlay').css('display', 'flex');
    //     $('.textFromButton').text($(this).attr('data-modalTitle'));
    // });


    $('.modalWindow--close').click(function (e) {
        e.preventDefault();
        $('.overlay').fadeOut();
    });

    Inputmask({ mask: '+7 (999) 999-9999'}).mask(document.querySelectorAll('#mainPhoneInput'));
    Inputmask({ mask: '+7 (999) 999-9999'}).mask(document.querySelectorAll('#modalWindow--input'));
    Inputmask({ mask: '+7 (999) 999-9999'}).mask(document.querySelectorAll('#questionPhoneInput'));

    $('#mainForm').submit(function() { // проверка на пустоту заполненных полей. Атрибут html5 — required не подходит (не поддерживается Safari)
		if (document.mainForm.mainPhone.value == '' ) {
			return false;
        }
        
		$.ajax({
			type: "POST",
			url: "mail.php",
			data: $(this).serialize()
		}).done(function() {
			// $('.js-overlay-thank-you').fadeIn();
			// $(this).find('input').val('');
			$('#mainForm').trigger('reset');
        });
        
		return false;
    });
    
    $('#questionForm').submit(function() { // проверка на пустоту заполненных полей. Атрибут html5 — required не подходит (не поддерживается Safari)
		if (document.questionForm.questionPhone.value == '' ) {
			return false;
        }
        
		$.ajax({
			type: "POST",
			url: "mailQuestion.php",
			data: $(this).serialize()
		}).done(function() {
			// $('.js-overlay-thank-you').fadeIn();
			// $(this).find('input').val('');
			$('#questionForm').trigger('reset');
        });
        
		return false;
    });
    
    $('#modalForm').submit(function() { // проверка на пустоту заполненных полей. Атрибут html5 — required не подходит (не поддерживается Safari)
		if (document.modalForm.modalPhone.value == '' ) {
			return false;
        }
        
		$.ajax({
			type: "POST",
			url: "mailModal.php",
			data: $(this).serialize()
		}).done(function() {
			// $('.js-overlay-thank-you').fadeIn();
			// $(this).find('input').val('');
			$('#modalForm').trigger('reset');
        });
        
		return false;
    });
    
    $('.mainMenu').click(function() {
        $('.sub-menu').css('visibility', 'hidden');
        setTimeout(function() {
            $('.sub-menu').css('visibility', '');
        }, 100);
    })
});


const pageMap = {
    '#index-hash'                       : '.index-hash',
    '#santehnik-main'                   : '.santehnik-main',
        '#santehnik--vizovNaDom'            : '.santehnik--vizovNaDom',
        '#santehnik--poVyzovu'              : '.santehnik--poVyzovu',
        '#santehnik--ustSantekhniki'        : '.santehnik--ustSantekhniki',
        '#santehnik--zamenaSantekhniki'     : '.santehnik--zamenaSantekhniki',
        '#santehnik--remontSantekhniki'     : '.santehnik--remontSantekhniki',
        '#santekhnicheskie-raboty'          : '.santehnik--santekhRaboty',
        '#razvodka-trub'                    : '.santehnik--razvTrub',
        '#svarochno-santekhnicheskie-raboty': '.santehnik--svarSantekhRaboty',
        '#ustranenie-protechek'             : '.santehnik--ustrProtechek',
        '#unitaz-pod-klyuch'                : '.santehnik--unitazKlyuch',
    '#ehlektrik-main'                   : '.ehlektrik-main',
        '#vyzov-ehlektrika-na-dom'      : '.ehlektrik--naDom',
        '#ehlektromontazhnye-raboty'    : '.ehlektrik--ehlektroMontazhRaboty',
        '#ustanovka-svetilnikov'        : '.ehlektrik--ustSvetilnikov',
        '#ustanovka-lyustry'            : '.ehlektrik--ustLyustry',
        '#ustanovka-rozetok'            : '.ehlektrik--ustRozetok',
        '#ustanovka-vyklyuchatelej'     : '.ehlektrik--ustVyklyuch',
        '#ustanovka-bra'                : '.ehlektrik--ustVyklyuch',
        '#provodka'                     : '.ehlektrik--provodka',
        '#montazh-shchitka'             : '.ehlektrik--montShchitka',
    '#master-main'                      : '.master-main',
        '#ustanovka-bytovoj-tekhniki'   : '.master-ustBytTekh',
        '#remont-bytovoj-tekhniki'      : '.master-remBytTekh',
}

let currentPage =  document.querySelectorAll('.index-hash');

window.addEventListener('hashchange', handlePage);

handlePage();

function handlePage() {
    const pageName = pageMap[location.hash];
    
    if (pageName) {
        const page = document.querySelectorAll(pageName);
        
        if (page) {
            if (currentPage) {
                for (let i = 0; i < currentPage.length; i++) {
                    currentPage[i].classList.add('hide-section');
                }
            }

            for (let i = 0; i < page.length; i++) {
                page[i].classList.remove('hide-section');
            }

            currentPage = page;
        }
    }

    // $('body,html').animate({scrollTop: 0}, 1);
    $('body,html').scrollTop(0);
}

$('.mobile-menu__humburger').click(function() {
    $('body').toggleClass('bodyOverflowHidden');
    $('.ham').toggleClass('active');
    $('.mobile-nav_hide').toggleClass('mobile-nav_active');
    $('.mobile-nav__item-links').each(function() {
        if ($(this).hasClass('mobile-nav__item-links-1_active')) {
            $(this).toggleClass('mobile-nav__item-links-1_active');
        }
        if ($(this).hasClass('mobile-nav__item-links-2_active')) {
            $(this).toggleClass('mobile-nav__item-links-2_active');
        }
        if ($(this).hasClass('mobile-nav__item-links-3_active')) {
            $(this).toggleClass('mobile-nav__item-links-3_active');
        }
    });
});

$('.mobile-nav__header-1').click(function() {
    $(this).toggleClass('mobile-nav__item-arrow_up');
    $(this).next().toggleClass('mobile-nav__item-links-1_active');    
});

$('.mobile-nav__header-2').click(function() {
    $(this).toggleClass('mobile-nav__item-arrow_up');
    $(this).next().toggleClass('mobile-nav__item-links-2_active');    
});

$('.mobile-nav__header-3').click(function() {
    $(this).toggleClass('mobile-nav__item-arrow_up');
    $(this).next().toggleClass('mobile-nav__item-links-3_active');    
});

$('.mobile-nav__link').click(function() {
    $('body').toggleClass('bodyOverflowHidden');
    $('.ham').toggleClass('active');
    $('.mobile-nav_hide').toggleClass('mobile-nav_active');
    $('.mobile-nav__item-links').each(function() {
        if ($(this).hasClass('mobile-nav__item-links-1_active')) {
            $(this).toggleClass('mobile-nav__item-links-1_active')
        }
        if ($(this).hasClass('mobile-nav__item-links-2_active')) {
            $(this).toggleClass('mobile-nav__item-links-2_active')
        }
        if ($(this).hasClass('mobile-nav__item-links-3_active')) {
            $(this).toggleClass('mobile-nav__item-links-3_active')
        }
    });
});

$('.mobile-nav__bg').click(function() {
    $(location).attr('href', '#index-hash');
    $('body').toggleClass('bodyOverflowHidden');
    $('.ham').toggleClass('active');
    $('.mobile-nav_hide').toggleClass('mobile-nav_active');
    $('.mobile-nav__item-links').each(function() {
        if ($(this).hasClass('mobile-nav__item-links-1_active')) {
            $(this).toggleClass('mobile-nav__item-links-1_active')
        }
        if ($(this).hasClass('mobile-nav__item-links-2_active')) {
            $(this).toggleClass('mobile-nav__item-links-2_active')
        }
        if ($(this).hasClass('mobile-nav__item-links-3_active')) {
            $(this).toggleClass('mobile-nav__item-links-3_active')
        }
    });
})