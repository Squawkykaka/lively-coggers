ServerEvents.recipes((event) => {
  const transition = "kubejs:incomplete_silicon_press";

  event.recipes.create
    .sequenced_assembly(
      [Item.of("ae2:silicon_press", 1)],
      "create:sturdy_sheet",
      [
        event.recipes.create.filling(transition, [
          Fluid.of("create_enchantment_industry:experience", 150),
          transition,
        ]),
        event.recipes.create.deploying(transition, [transition, "ae2:silicon"]),
      ],
    )
    .transitionalItem(transition)
    .loops(1);
});

ServerEvents.recipes((event) => {
  const transition = "kubejs:incomplete_engineering_press";

  event.recipes.create
    .sequenced_assembly(
      [Item.of("ae2:engineering_processor_press", 1)],
      "create:sturdy_sheet",
      [
        event.recipes.create.filling(transition, [
          Fluid.of("create_enchantment_industry:experience", 150),
          transition,
        ]),
        event.recipes.create.deploying(transition, [transition, "diamond"]),
      ],
    )
    .transitionalItem(transition)
    .loops(1);
});

ServerEvents.recipes((event) => {
  const transition = "kubejs:incomplete_logic_press";

  event.recipes.create
    .sequenced_assembly(
      [Item.of("ae2:logic_processor_press", 1)],
      "create:sturdy_sheet",
      [
        event.recipes.create.filling(transition, [
          Fluid.of("create_enchantment_industry:experience", 150),
          transition,
        ]),
        event.recipes.create.deploying(transition, [
          transition,
          "create:golden_sheet",
        ]),
      ],
    )
    .transitionalItem(transition)
    .loops(1);
});

ServerEvents.recipes((event) => {
  const transition = "kubejs:incomplete_calculation_press";

  event.recipes.create
    .sequenced_assembly(
      [Item.of("ae2:calculation_processor_press", 1)],
      "create:sturdy_sheet",
      [
        event.recipes.create.filling(transition, [
          Fluid.of("create_enchantment_industry:experience", 150),
          transition,
        ]),
        event.recipes.create.deploying(transition, [
          transition,
          "ae2:charged_certus_quartz_crystal",
        ]),
      ],
    )
    .transitionalItem(transition)
    .loops(1);
});

ServerEvents.recipes((event) => {
  event.recipes.create.item_application("ae2:flawed_budding_quartz", [
    "minecraft:budding_amethyst",
    "minecraft:sculk_shrieker",
  ]);
});
