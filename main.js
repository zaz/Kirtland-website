function adjust_header(header) {
	let scroll = $(window).scrollTop()
	if (100 > scroll) {
		header.height(128 - scroll)
		header.css("padding", "16px")
	} else if (124 > scroll) {
		header.css("padding", 16 + (100 - scroll)/2 + "px")
	} else {
		header.height(28)
		header.css("padding", "4px")
	}
	if (scroll > 80) { header.addClass("hide-detail") }
	else { header.removeClass("hide-detail") }
}

$( () => {
	let header = $("header")

	$(window).scroll( e => adjust_header(header) )
	adjust_header(header)
})
