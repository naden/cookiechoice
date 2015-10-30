/**
 * jQuery based Cookiechoice widget.
 *
 * v0.1 (c) 2015 by Naden Badalgogtapeh <n.b@naden.de>
 *
 * http://www.naden.de
 *
 */
(function($) {
	$(function() {
		if(Cookies.get('cookiechoice') == undefined) {

			// add css to <head>
			$('<link>', {
				'rel': 'stylesheet', 
				'type': 'text/css', 
				'href' : window.cookiechoice_style || $('script[src$="cookiechoice.js"]').attr('src').replace('.js', '.css')
			}).appendTo('head');

			// append html to <body>
			$('<div>', {id: 'cookiechoice-wrapper-inner'})				
				.html(window.cookiechoice_message || 'Mit der Nutzung unserer Dienste erklären Sie sich damit einverstanden, dass wir Cookies verwenden <a href="" id="cookiechoice-link-confirm">OK</a> <a href="https://www.cookiechoices.org" target="_blank" id="cookiechoice-link-info">Mehr erfahren</a>')
				.appendTo(
					$('<div>', {'id' : 'cookiechoice-wrapper-outer'})
						.css(window.cookiechoice_placement || 'bottom', 0)
						.appendTo('body')
				);
			
			// onClick handler
			$('#cookiechoice-link-confirm').on('click', function(e) {
				e.preventDefault();
				Cookies.set('cookiechoice', 1, {expires: window.cookiechoice_ttl || 90});
				$('#cookiechoice-wrapper-outer').remove();
			});
		}
	});
})(jQuery);
