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
});


