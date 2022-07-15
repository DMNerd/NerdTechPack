onEvent('recipes', event => {
    //Create recipes
    //Crushing
    event.recipes.createCrushing('ftbic:uranium_dust', 'powah:uraninite').id('ntp:create/uraninite_to_uranium')
	event.recipes.createCrushing(Item.of('quark:red_corundum_cluster', 9), Item.of('quark:red_corundum')).id('ntp:create/corundum_block_to_cluster_red')
	event.recipes.createCrushing(Item.of('quark:orange_corundum_cluster', 9), Item.of('quark:orange_corundum')).id('ntp:create/corundum_block_to_cluster_orange')
	event.recipes.createCrushing(Item.of('quark:yellow_corundum_cluster', 9), Item.of('quark:yellow_corundum')).id('ntp:create/corundum_block_to_cluster_yellow')
	event.recipes.createCrushing(Item.of('quark:green_corundum_cluster', 9), Item.of('quark:green_corundum')).id('ntp:create/corundum_block_to_cluster_green')
	event.recipes.createCrushing(Item.of('quark:blue_corundum_cluster', 9), Item.of('quark:blue_corundum')).id('ntp:create/corundum_block_to_cluster_blue')
	event.recipes.createCrushing(Item.of('quark:indigo_corundum_cluster', 9), Item.of('quark:indigo_corundum')).id('ntp:create/corundum_block_to_cluster_indigo')
	event.recipes.createCrushing(Item.of('quark:violet_corundum_cluster', 9), Item.of('quark:violet_corundum')).id('ntp:create/corundum_block_to_cluster_violet')
	event.recipes.createCrushing(Item.of('quark:white_corundum_cluster', 9), Item.of('quark:white_corundum')).id('ntp:create/corundum_block_to_cluster_white')
	event.recipes.createCrushing(Item.of('quark:black_corundum_cluster', 9), Item.of('quark:black_corundum')).id('ntp:create/corundum_block_to_cluster_black')
})