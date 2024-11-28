
ServerEvents.recipes(event => {
    const transition = 'kubejs:incomplete_item_cable'
    event.recipes.create.sequenced_assembly([
      Item.of("toms_storage:ts.inventory_cable", 4).withChance(0.95)
    ], "create:fluid_pipe", [
      event.recipes.create.cutting(transition, transition),
      event.recipes.create.deploying(transition, [transition, Item.of("create:sturdy_sheet")]),
      event.recipes.create.filling(transition, [transition, Fluid.of("create_enchantment_industry:flowing_experience", 50)]),
      event.recipes.create.pressing(transition, transition)
    ]).transitionalItem(transition).loops(1)
})

ServerEvents.recipes(event => {
  event.shapeless("toms_storage:ts.inventory_cable_connector_filtered", ["toms_storage:ts.inventory_cable_connector", "create:filter"])
  event.shaped("toms_storage:ts.inventory_cable_connector", [
    "SBIBS",
    " RIR ",
    "  D  "
  ], {
    I: "toms_storage:ts.inventory_cable",
    S: "create:sturdy_sheet",
    B: "create:brass_casing",
    R: "minecraft:redstone",
    D: "minecraft:diamond"
  })
})