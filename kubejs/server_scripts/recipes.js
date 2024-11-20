ServerEvents.recipes(event => {
    event.recipes.create.mechanical_crafting('toms_storage:ts.adv_wireless_terminal', [
        'L  ',
        'CRC',
        'SIS',
        'BNB'
    ], {
        C: 'create:railway_casing',
        R: 'crafting_table',
        S: '#forge:plates/obsidian',
        I: 'toms_storage:ts.inventory_connector',
        N: '#forge:ingots/netherite',
        B: '#forge:plates/brass',
        L: 'create:redstone_link'
    })

    event.recipes.minecraft.crafting_shapeless('toms_storage:ts.inventory_connector', [
        'create:brass_casing',
        'create:chute',
        '#forge:plates/obsidian'
    ])

    event.remove({input: "create_enchantment_industry:experience_rotor"})
    event.shaped("sophisticatedbackpacks:copper_backpack", [
        '#S#',
        'LCL',
        '#L#'
    ], {
        '#': 'minecraft:copper_ingot',
        'C': 'minecraft:chest',
        'L': 'minecraft:leather',
        'S': 'minecraft:string'
    })
    
  })