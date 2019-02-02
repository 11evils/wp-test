// Отправка заявки с главной формы
$(document).ready(function() {
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
});

$(document).ready(function() {
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
});



$(document).ready(function() {
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

// Закрыть попап «спасибо»
// $('.js-close-thank-you').click(function() { // по клику на крестик
// 	$('.js-overlay-thank-you').fadeOut();
// });

// $(document).mouseup(function (e) { // по клику вне попапа
//     var popup = $('.popup');
//     if (e.target!=popup[0]&&popup.has(e.target).length === 0){
//         $('.js-overlay-thank-you').fadeOut();
//     }
// });

// Маска ввода номера телефона (плагин maskedinput)
// $(function($){
// 	$('[name="phone"]').mask("+7(999) 999-9999");
// });

