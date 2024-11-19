ServerEvents.recipes(event => {
    event.recipes.create.mechanical_crafting('toms_storage:ts.adv_wireless_terminal', [
        ' CRC ',
        'DSISD',
        ' SNS ',
        '  B  '
    ], {
        C: 'create:railway_casing',
        R: 'crafting_table',
        S: '#forge:plates/obsidian',
        I: 'toms_storage:ts.inventory_connector',
        N: '#forge:ingots/netherite',
        B: '#forge:plates/brass',
        D: 'create:deployer'
    })

    event.recipes.minecraft.crafting_shapeless('toms_storage:ts.inventory_connector', [
        'create:brass_casing',
        'create:chute',
        '#forge:plates/obsidian'
    ])
  })