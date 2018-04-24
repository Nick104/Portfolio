$(document).ready(function() {
	// Buttons
	var aboutBtn = $('.aboutBtn');
	var portfolioBtn = $('.portfolioBtn');
	var contactBtn = $('.contactBtn');
	
	// Inputs
	var name = $('#name');
	var email = $('#email');
	var phone = $('#phone');
	var message = $('#message');			
	
	// About button
	aboutBtn.click(function() {
		scrollToElement('#about');
		makeActiveBtn(aboutBtn, portfolioBtn, contactBtn);
	});
	
	// Portfolio button
	portfolioBtn.click(function() {
		scrollToElement('#portfolio');
		makeActiveBtn(portfolioBtn, aboutBtn, contactBtn);
	});
	
	// Contact button
	contactBtn.click(function() {
		scrollToElement('#contact');
		makeActiveBtn(contactBtn, aboutBtn, portfolioBtn);
	});
	
	// Up button
	$('#upBtn').click(function() {
		scrollToElement('#about');
	});
	
	// Name
	name.on('input', function(event) {
		$('#nameLabel').fadeTo('slow', 1);
		if (event.target.value.length === 0) {
			$('#nameLabel').fadeTo('slow', 0.009);
		}
	});
	
	// Email
	email.on('input', function(event) {
		$('#emailLabel').fadeTo('slow', 1);
		if (event.target.value.length === 0) {
			$('#emailLabel').fadeTo('slow', 0.009);
		}
	});
	
	// Phone
	phone.on('input', function(event) {
		$('#phoneLabel').fadeTo('slow', 1);
		if (event.target.value.length === 0) {
			$('#phoneLabel').fadeTo('slow', 0.009);
		}
	});
	
	// Message
	message.on('input', function(event) {
		$('#messageLabel').fadeTo('slow', 1);
		if (event.target.value.length === 0) {
			$('#messageLabel').fadeTo('slow', 0.009);
		}
	});
	
	// Scroll
	$(window).on('scroll', function(event) {
		// Positions of elements
		var aboutPos = $('header').position().top;
		var portfolioPos = $('#portfolio').position().top - 50;
		var contactPos = $('#contact').position().top - 30;
		// Check scroll
		var scroll = $(window).scrollTop();
		// About
		if (scroll > 0 && scroll < portfolioPos) {
			makeActiveBtn(aboutBtn, portfolioBtn, contactBtn);
		// Portfolio
		} else if (scroll >= portfolioPos && scroll < contactPos) {
			makeActiveBtn(portfolioBtn, aboutBtn, contactBtn);
		// Contact
		} else if (scroll >= contactPos) {
			makeActiveBtn(contactBtn, aboutBtn, portfolioBtn);
		}
	});
});
// Scroll to element
function scrollToElement(element) {
	var x = $(element).position();
	// Animate scroll
	$('html, body').animate({scrollTop: $(element).offset().top - 20}, 500, 'swing');
}

// Make the button active
function makeActiveBtn(activeBtn, secondBtn, thirdBtn) {
	activeBtn.addClass('activeBtn');
	secondBtn.removeClass('activeBtn');
	thirdBtn.removeClass('activeBtn');
}