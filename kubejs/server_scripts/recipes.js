ServerEvents.recipes(event => {
    event.remove({id: 'sophisticatedbackpacks:iron_backpack_from_copper'})
    event.remove({input: 'create_enchantment_industry:experience_rotor'})
    event.remove({id: 'sophisticatedbackpacks:gold_backpack'})
    event.remove({id: 'sophisticatedbackpacks:diamond_backpack'})
    event.remove({id: "toms_storage:ts.inventory_cable"})
})

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

    // Copper backpack recipe
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

    // Andesite backpack recipe
    event.custom({
        "type": "sophisticatedbackpacks:backpack_upgrade",
        "conditions": [
          {
            "type": "sophisticatedcore:item_enabled",
            "itemRegistryName": "sophisticatedbackpacks:iron_backpack"
          }
        ],
        "key": {
          "B": {
            "item": "sophisticatedbackpacks:copper_backpack"
          },
          "A": {
            "item": "create:fluid_pipe"
          },
          "S": {
            "item": "create:shaft"
          },
          "C": {
            "item": "create:andesite_casing"
          },
          "O": {
            "item": "create:cogwheel"
          },
          "F": {
            "item": "create:item_vault"
          }
          
        },
        "pattern": [
          "ASA",
          "CBC",
          "FOF"
        ], "result": {
          "item": "sophisticatedbackpacks:iron_backpack"
        }
    });

    // Brass backpack recipe
    event.custom({
      "type": "sophisticatedbackpacks:backpack_upgrade",
      "conditions": [
        {
          "type": "sophisticatedcore:item_enabled",
          "itemRegistryName": "sophisticatedbackpacks:iron_backpack"
        }
      ],
      "key": {
        "B": {
          "item": "sophisticatedbackpacks:iron_backpack"
        },
        "A": {
          "item": "create:steam_engine"
        },
        "S": {
          "item": "create:redstone_link"
        },
        "C": {
          "tag": "forge:ingots/brass"
        },
        "O": {
          "item": "create:precision_mechanism"
        },
        "F": {
          "item": "minecraft:leather"
        }
        
      },
      "pattern": [
        "ASA",
        "CBC",
        "FOF"
      ], "result": {
        "item": "sophisticatedbackpacks:gold_backpack"
      }
    });

    // Sturdy backpack
    event.custom({
      "type": "sophisticatedbackpacks:backpack_upgrade",
      "conditions": [
        {
          "type": "sophisticatedcore:item_enabled",
          "itemRegistryName": "sophisticatedbackpacks:diamond_backpack"
        }
      ],
      "key": {
        "B": {
          "item": "sophisticatedbackpacks:gold_backpack"
        },
        "S": {
          "item": "immersive_aircraft:nether_engine"
        },
        "C": {
          "item": "create:railway_casing"
        },
        "O": {
          "item": "toms_storage:ts.inventory_connector"
        },
        "F": {
          "item": "create:sturdy_sheet"
        }
        
      },
      "pattern": [
        " S ",
        "CBC",
        "FOF"
      ], "result": {
        "item": "sophisticatedbackpacks:diamond_backpack"
      }
    });

})

ServerEvents.recipes(event => {
  const transition = 'kubejs:incomplete_item_cable'
  event.recipes.create.sequenced_assembly([
    Item.of("toms_storage:ts.inventory_cable", 8).withChance(0.95),
    Item.of("create:brass_ingot", 1).withChance(0.05)
  ], "create:fluid_pipe", [
    event.recipes.create.cutting(transition, transition),
    event.recipes.create.deploying(transition, [transition, Item.of("create:sturdy_sheet")]),
    event.recipes.create.filling(transition, [transition, Fluid.of("create_enchantment_industry:flowing_experience", 50)]),
    event.recipes.create.pressing(transition, transition)
  ]).transitionalItem(transition).loops(1)
})