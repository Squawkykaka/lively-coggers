
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