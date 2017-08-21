jQuery(document).ready(function(){ jQuery(".fontResizeWidget").fontResizeWidget(); });

jQuery.fn.fontResizeWidget = function () {

	var post = $('article.post');
	var widget = $('font-size-widget');

	$(post).add(widget);

	var baseSize = $(post).css('font-size');
	var sizeStep = (baseSize * 1.25);

	$('.fsw-size-up').click(function() {
		var size = $(post).css('font-size');
		if (size < baseSize * 3) { return; }
		$(post).css({
			fontSize: (baseSize + sizeStep)
		});
	});

	$('.fsw-size-down').click(function() {
		var size = $(post).css('font-size');
		if (size < baseSize / 2) { return; }
		$(post).css({
			fontSize: (baseSize - sizeStep)
		});
	});
}