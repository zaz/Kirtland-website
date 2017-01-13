const animation_period = 300

function in_page_links_smooth_scroll() {
	$('a[href^="#"]').click(function (e) {
		e.preventDefault()

		let target = this.hash
		let offset = $(target).offset().top

		$('html, body').stop().animate({ scrollTop: offset },
			animation_period, 'swing', () =>
				window.location.hash = target
		)
	})
}

$( () => {
	in_page_links_smooth_scroll()
})
