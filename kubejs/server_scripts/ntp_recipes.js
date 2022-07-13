onEvent('recipes', event => {
	//Remove Recipes
	event.remove({output: '#forge:fillet_knife', mod:'aquaculture'})
	event.remove({id: '#thermal:fire_charge/enderium_ingot_2'})
	//Add Recipes
	event.shapeless('4x minecraft:string', ['#forge:wools', '#forge:fillet_knife'])
})