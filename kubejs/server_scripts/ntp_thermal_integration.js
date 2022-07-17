onEvent('recipes', event => {
	//Thermal recipes
	event.recipes.thermal.lapidary_fuel('byg:ametrine_gems').energy(250000)
	event.recipes.thermal.lapidary_fuel('bluepower:green_sapphire_gem').energy(125000)
	event.recipes.thermal.lapidary_fuel('quark:red_corundum_cluster').energy(40000)
	event.recipes.thermal.lapidary_fuel('quark:orange_corundum_cluster').energy(40000)
	event.recipes.thermal.lapidary_fuel('quark:yellow_corundum_cluster').energy(40000)
	event.recipes.thermal.lapidary_fuel('quark:green_corundum_cluster').energy(40000)
	event.recipes.thermal.lapidary_fuel('quark:blue_corundum_cluster').energy(40000)
	event.recipes.thermal.lapidary_fuel('quark:indigo_corundum_cluster').energy(40000)
	event.recipes.thermal.lapidary_fuel('quark:violet_corundum_cluster').energy(40000)
	event.recipes.thermal.lapidary_fuel('quark:white_corundum_cluster').energy(40000)
	event.recipes.thermal.lapidary_fuel('quark:black_corundum_cluster').energy(40000)
	//Crushing
	event.recipes.thermal.pulverizer(Item.of('ftbic:uranium_dust'), 'powah:uraninite').experience(0.2).id('ntp:thermal/uraninite_to_uranium')
	event.recipes.thermal.pulverizer(Item.of('ftbic:uranium_dust'), 'powah:uraninite_raw').experience(0.2).id('ntp:thermal/raw_uraninite_to_uranium')
	event.recipes.thermal.pulverizer(Item.of('quark:red_corundum_cluster', 9), Item.of('quark:red_corundum')).experience(0.2).id('ntp:thermal/corundum_block_to_cluster_red')
	event.recipes.thermal.pulverizer(Item.of('quark:red_corundum_cluster', 9), Item.of('quark:red_corundum')).experience(0.2).id('ntp:thermal/corundum_block_to_cluster_red')
	event.recipes.thermal.pulverizer(Item.of('quark:orange_corundum_cluster', 9), Item.of('quark:orange_corundum')).experience(0.2).id('ntp:thermal/corundum_block_to_cluster_orange')
	event.recipes.thermal.pulverizer(Item.of('quark:yellow_corundum_cluster', 9), Item.of('quark:yellow_corundum')).experience(0.2).id('ntp:thermal/corundum_block_to_cluster_yellow')
	event.recipes.thermal.pulverizer(Item.of('quark:green_corundum_cluster', 9), Item.of('quark:green_corundum')).experience(0.2).id('ntp:thermal/corundum_block_to_cluster_green')
	event.recipes.thermal.pulverizer(Item.of('quark:blue_corundum_cluster', 9), Item.of('quark:blue_corundum')).experience(0.2).id('ntp:thermal/corundum_block_to_cluster_blue')
	event.recipes.thermal.pulverizer(Item.of('quark:indigo_corundum_cluster', 9), Item.of('quark:indigo_corundum')).experience(0.2).id('ntp:thermal/corundum_block_to_cluster_indigo')
	event.recipes.thermal.pulverizer(Item.of('quark:violet_corundum_cluster', 9), Item.of('quark:violet_corundum')).experience(0.2).id('ntp:thermal/corundum_block_to_cluster_violet')
	event.recipes.thermal.pulverizer(Item.of('quark:white_corundum_cluster', 9), Item.of('quark:white_corundum')).experience(0.2).id('ntp:thermal/corundum_block_to_cluster_white')
	event.recipes.thermal.pulverizer(Item.of('quark:black_corundum_cluster', 9), Item.of('quark:black_corundum')).experience(0.2).id('ntp:thermal/corundum_block_to_cluster_black')
})