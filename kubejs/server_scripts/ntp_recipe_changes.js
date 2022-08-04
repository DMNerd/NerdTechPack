onEvent('recipes', event => {
	//Remove Recipes
	event.remove({output: '#forge:fillet_knife', mod:'aquaculture'})
	event.remove({id: 'thermal:fire_charge/enderium_ingot_2'})
	event.remove({id: 'ftbic:shaped/enderium_dust'})
	event.remove({id: 'beyond_earth:steel_ingot_blasting'})
	event.remove({id: 'simplyjetpacks:leather_strap'})
	event.remove({output: 'angelring:itemring'})
})