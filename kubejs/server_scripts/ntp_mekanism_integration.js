onEvent('recipes', event => {
	//Mekanism recipes
	event.recipes.mekanismCrushing('ftbic:uranium_dust', 'powah:uraninite').id('ntp:uraninite_to_uranium')
	event.recipes.mekanismInjecting('powah:uraninite', 'ftbic:uranium_dust', {gas: 'mekanism:oxygen', amount: 1}).id('ntp:uranium_to_uraninite')
})