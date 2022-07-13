onEvent('tags.items', event => {
	//Add tags
	event.add('forge:fillet_knife', /farmersdelight:.+_knife/)
	event.add('forge:fillet_knife', /tools_complement:.+_knife/)
	event.add('forge:fillet_knife', /delightful:.+_knife/)
	//Bluepower integration
	event.add('forge:raw_materials', 'bluepower:zinc_raw')
	event.add('forge:raw_materials/zinc', 'bluepower:zinc_raw')
	event.add('forge:raw_materials', 'bluepower:silver_raw')
	event.add('forge:raw_materials/silver', 'bluepower:silver_raw')
	event.add('forge:raw_materials', 'bluepower:tungsten_raw')
	event.add('forge:raw_materials/tungsten', 'bluepower:tungsten_raw')
	event.add('forge:gems', 'bluepower:green_sapphire_gem')
	event.add('forge:ingots', 'bluepower:tungsten_carbide')
	event.add('forge:ingots/tungsten_carbide', 'bluepower:tungsten_carbide')
	event.add('forge:ingots', 'bluepower:tungsten_carbide')
	event.add('forge:ingots/tungsten_carbide', 'bluepower:tungsten_carbide')
	event.add('forge:ingots', 'bluepower:brass_ingot')
	event.add('forge:dusts', 'bluepower:teslatite_dust')
	event.add('forge:dusts', 'bluepower:zinc_dust')
	event.add('forge:dusts', 'bluepower:brass_dust')
	event.add('forge:nuggets', 'bluepower:brass_nugget')
	event.add('forge:nuggets', 'bluepower:tungsten_nugget')
	event.add('forge:ingots', 'bluepower:blue_alloy_ingot')
	event.add('forge:ingots/blue_alloy', 'bluepower:blue_alloy_ingot')
	event.add('forge:ingots', 'bluepower:red_alloy_ingot')
	event.add('forge:ingots/red_alloy', 'bluepower:red_alloy_ingot')
	event.add('forge:ingots', 'bluepower:purple_alloy_ingot')
	event.add('forge:ingots/purple_alloy', 'bluepower:purple_alloy_ingot')
	event.add('create:crushed_ores', 'bluepower:zinc_ore_crushed')
	event.add('forge:seeds', 'bluepower:flax_seeds')
	//Powah integration
	event.add('forge:ingots', 'powah:steel_energized')
	event.add('forge:ingots/energized_steel', 'powah:steel_energized')
	event.add('powah:blazing_crystal', 'powah:crystal_blazing')
	event.add('powah:niotic_crystal', 'powah:crystal_niotic')
	event.add('powah:spirited_crystal', 'powah:crystal_spirited')
	event.add('powah:nitro_crystal', 'powah:crystal_nitro')
	event.add('forge:raw_materials', 'powah:uraninite_raw')
	event.add('forge:raw_materials/uraninite', 'powah:uraninite_raw')
	//FTBIC integration
	event.add('forge:raw_ores/iridium', 'ftbic:iridium_chunk')
})