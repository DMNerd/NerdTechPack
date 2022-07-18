onEvent('recipes', event => {
	//Mekanism recipes
	//Injecting
	event.recipes.mekanismInjecting('powah:uraninite', 'ftbic:uranium_dust', {gas: 'mekanism:oxygen', amount: 1}).id('ntp:mekanism/uranium_to_uraninite')
	//Crushing
	event.recipes.mekanismCrushing(Item.of('ftbic:uranium_dust'), 'powah:uraninite').id('ntp:mekanism/uraninite_to_uranium')
	event.recipes.mekanismCrushing(Item.of('industrialforegoing:tinydryrubber', 4), 'thermal:rubber').id('ntp:mekanism/thermal_rubber_to_if_rubber')
	event.recipes.mekanismCrushing(Item.of('quark:red_corundum_cluster', 9), Item.of('quark:red_corundum')).id('ntp:mekanism/corundum_block_to_cluster_red')
	event.recipes.mekanismCrushing(Item.of('quark:orange_corundum_cluster', 9), Item.of('quark:orange_corundum')).id('ntp:mekanism/corundum_block_to_cluster_orange')
	event.recipes.mekanismCrushing(Item.of('quark:yellow_corundum_cluster', 9), Item.of('quark:yellow_corundum')).id('ntp:mekanism/corundum_block_to_cluster_yellow')
	event.recipes.mekanismCrushing(Item.of('quark:green_corundum_cluster', 9), Item.of('quark:green_corundum')).id('ntp:mekanism/corundum_block_to_cluster_green')
	event.recipes.mekanismCrushing(Item.of('quark:blue_corundum_cluster', 9), Item.of('quark:blue_corundum')).id('ntp:mekanism/corundum_block_to_cluster_blue')
	event.recipes.mekanismCrushing(Item.of('quark:indigo_corundum_cluster', 9), Item.of('quark:indigo_corundum')).id('ntp:mekanism/corundum_block_to_cluster_indigo')
	event.recipes.mekanismCrushing(Item.of('quark:violet_corundum_cluster', 9), Item.of('quark:violet_corundum')).id('ntp:mekanism/corundum_block_to_cluster_violet')
	event.recipes.mekanismCrushing(Item.of('quark:white_corundum_cluster', 9), Item.of('quark:white_corundum')).id('ntp:mekanism/corundum_block_to_cluster_white')
	event.recipes.mekanismCrushing(Item.of('quark:black_corundum_cluster', 9), Item.of('quark:black_corundum')).id('ntp:mekanism/corundum_block_to_cluster_black')
	//Enriching
	event.recipes.mekanismEnriching(Item.of('ftbic:uranium_dust', 4), Item.of('powah:uraninite_raw', 3)).id('ntp:mekanism/raw_uraninite_to_uranium_enriching')
})