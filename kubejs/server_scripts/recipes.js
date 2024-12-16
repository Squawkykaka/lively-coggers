ServerEvents.recipes(event => {
    event.remove({id: 'sophisticatedbackpacks:iron_backpack_from_copper'})
    event.remove({input: 'create_enchantment_industry:experience_rotor'})
    event.remove({id: 'sophisticatedbackpacks:gold_backpack'})
    event.remove({id: 'sophisticatedbackpacks:diamond_backpack'})
    event.remove({id: "toms_storage:inventory_cable"})
    event.remove({id: "toms_storage:inventory_cable_connector_filtered"})
    event.remove({id: "toms_storage:inventory_connector"})
    event.remove({id: "toms_storage:inventory_cable_connector"})
    event.remove({id: "toms_storage:item_filter"})
    event.remove({id: "toms_storage:inventory_proxy"})
    event.remove({id: "toms_storage:open_crate"})
    event.remove({id: "toms_storage:storage_terminal"})
    event.remove({id: "toms_storage:crafting_terminal"})
})

ServerEvents.recipes(event => {
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
  event.shaped("sophisticatedbackpacks:tool_swapper_upgrade", [
    'BPB',
    'SLA',
    'BHB'
  ], {
    B: "create:brass_ingot",
    P: "minecraft:iron_pickaxe",
    S: "minecraft:iron_sword",
    A: "minecraft:iron_axe",
    H: "minecraft:iron_hoe",
    L: "minecraft:leather"
  })

  event.shaped("sophisticatedbackpacks:jukebox_upgrade", [
    'PDP',
    'PLP',
    'PPP'
  ], {
    P: "#minecraft:planks",
    D: "minecraft:diamond",
    L: "minecraft:leather"
  })

  event.shaped("sophisticatedbackpacks:advanced_refill_upgrade", [
    'CMC',
    'BLB',
    ' H '
  ], {
    C: "create:cogwheel",
    M: "create:mechanical_arm",
    B: "create:brass_ingot",
    L: "minecraft:leather",
    H: "create:chute"
  })

  event.shaped("sophisticatedbackpacks:stack_upgrade_tier_1", [
    'GAG',
    'ALA',
    'GUG'
  ], {
    G: "minecraft:gold_ingot",
    A: "create:andesite_alloy",
    L: "minecraft:leather",
    U: "functionalstorage:copper_upgrade"
  })
})
