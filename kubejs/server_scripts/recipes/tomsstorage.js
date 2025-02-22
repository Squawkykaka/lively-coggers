ServerEvents.recipes((event) => {
  const transition = "kubejs:incomplete_item_cable";
  event.recipes.create
    .sequenced_assembly(
      [Item.of("toms_storage:ts.inventory_cable", 8)],
      "create:fluid_pipe",
      [
        event.recipes.create.cutting(transition, transition),
        event.recipes.create.deploying(transition, [
          transition,
          Item.of("create:sturdy_sheet"),
        ]),
        event.recipes.create.pressing(transition, transition),
      ],
    )
    .transitionalItem(transition)
    .loops(1);
});

ServerEvents.recipes((event) => {
  event.shapeless("toms_storage:ts.inventory_cable_connector_filtered", [
    "toms_storage:ts.inventory_cable_connector",
    "create:filter",
  ]);
  event.shaped(
    "toms_storage:ts.inventory_cable_connector",
    ["BIB", "RIR", " S "],
    {
      I: "toms_storage:ts.inventory_cable",
      S: "create:sturdy_sheet",
      B: "create:brass_ingot",
      R: "minecraft:redstone",
    },
  );
  event.replaceInput(
    { id: "toms_storage:trim" },
    "#minecraft:planks",
    "create:andesite_alloy",
  );
  event.replaceInput(
    { id: "toms_storage:paint_kit" },
    "#minecraft:wool",
    "create:super_glue",
  );
  event.replaceInput(
    { id: "toms_storage:inventory_hopper_basic" },
    "#minecraft:planks",
    "#forge:ingots/brass",
  );
  event.replaceInput(
    { id: "toms_storage:level_emitter" },
    "#minecraft:planks",
    "#forge:ingots/brass",
  );
  event.recipes.minecraft.crafting_shaped(
    "toms_storage:ts.inventory_proxy",
    ["SVS", "BIB", "SBS"],
    {
      I: "create:item_vault",
      S: "create:andesite_alloy",
      B: "create:iron_sheet",
      V: "create:chute",
    },
  );
  event.shapeless("toms_storage:ts.item_filter", [
    "create:filter",
    "toms_storage:ts.inventory_cable",
  ]);
  event.recipes.minecraft.crafting_shaped(
    "toms_storage:ts.open_crate",
    ["WWW", "AIA", "WCW"],
    {
      W: "#minecraft:planks",
      C: "create:chute",
      A: "create:andesite_alloy",
      I: "create:item_vault",
    },
  );

  event.recipes.minecraft.crafting_shaped(
    "toms_storage:ts.crafting_terminal",
    [" D ", "EBE", "SCS"],
    {
      D: "create:display_link",
      S: "create:sturdy_sheet",
      E: "create:electron_tube",
      B: "create:display_board",
      C: "create:linked_controller",
    },
  );
  event.recipes.create.mechanical_crafting(
    "toms_storage:ts.adv_wireless_terminal",
    ["L  ", "CRC", "SIS", "BNB"],
    {
      C: "create:railway_casing",
      R: "toms_storage:ts.crafting_terminal",
      S: "#forge:plates/obsidian",
      I: "toms_storage:ts.inventory_connector",
      N: "#forge:ingots/netherite",
      B: "#forge:plates/brass",
      L: "create:redstone_link",
    },
  );
});

ServerEvents.recipes((event) => {
  const transition = "kubejs:incomplete_inventory_connector";
  event.recipes.create
    .sequenced_assembly(
      [Item.of("toms_storage:ts.inventory_connector", 1)],
      "create:brass_block",
      [
        event.recipes.create.deploying(transition, [
          transition,
          Item.of("create:sturdy_sheet"),
        ]),
        event.recipes.create.deploying(transition, [
          transition,
          Item.of("create:sturdy_sheet"),
        ]),
        event.recipes.create.filling(transition, [
          transition,
          Fluid.of("minecraft:lava", 250),
        ]),
        event.recipes.create.pressing(transition, transition),
      ],
    )
    .transitionalItem(transition)
    .loops(1);
});
