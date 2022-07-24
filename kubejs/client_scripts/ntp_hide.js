onEvent("jei.hide.items", event => {
	event.hide(/titanium:.*/)
	event.hide(/excavated_variants:.*/)
	event.hide(/aquaculture:.*_fillet_knife/)
})
