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

import 'slick-carousel';

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
    '#index-hash': '.index-hash',
    '#santehnik-main': '.santehnik-main',
    '#santehnik--vizovNaDom': '.santehnik--vizovNaDom',
    '#santehnik--poVyzovu': '.santehnik--poVyzovu',
    '#santehnik--ustSantekhniki': '.santehnik--ustSantekhniki',
    '#santehnik--zamenaSantekhniki': '.santehnik--zamenaSantekhniki',
    '#ehlektrik-main': '.ehlektrik-main',
    '#master-main': '.master-main',
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
                    // delete currentPage[i];
                }
            }

            for (let i = 0; i < page.length; i++) {
                page[i].classList.remove('hide-section');
            }

            currentPage = page;
        }
    }
}
