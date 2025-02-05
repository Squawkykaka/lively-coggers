ServerEvents.recipes((event) => {
  const transition = "createappliedkinetics:incomplete_silicon_press";

  event.recipes.create
    .sequenced_assembly(
      [Item.of("ae2:silicon_press", 1)],
      "create:sturdy_sheet",
      [
        event.recipes.create.deploying(transition, [transition, "ae2:silicon"]),
        event.recipes.create.filling(transition, [
          Fluid.of("create_enchantment_industry:experience", 150),
          transition,
        ]),
      ],
    )
    .transitionalItem(transition)
    .loops(1);
});

ServerEvents.recipes((event) => {
  const transition = "createappliedkinetics:incomplete_engineering_processor_press";

  event.recipes.create
    .sequenced_assembly(
      [Item.of("ae2:engineering_processor_press", 1)],
      "create:sturdy_sheet",
      [
        event.recipes.create.deploying(transition, [transition, "diamond"]),
        event.recipes.create.filling(transition, [
          Fluid.of("create_enchantment_industry:experience", 150),
          transition,
        ]),
      ],
    )
    .transitionalItem(transition)
    .loops(1);
});

ServerEvents.recipes((event) => {
  const transition = "createappliedkinetics:incomplete_logic_processor_press";

  event.recipes.create
    .sequenced_assembly(
      [Item.of("ae2:logic_processor_press", 1)],
      "create:sturdy_sheet",
      [
        event.recipes.create.deploying(transition, [
          transition,
          "create:golden_sheet",
        ]),
        event.recipes.create.filling(transition, [
          Fluid.of("create_enchantment_industry:experience", 150),
          transition,
        ]),
      ],
    )
    .transitionalItem(transition)
    .loops(1);
});

ServerEvents.recipes((event) => {
  const transition = "createappliedkinetics:incomplete_calculation_processor_press";

  event.recipes.create
    .sequenced_assembly(
      [Item.of("ae2:calculation_processor_press", 1)],
      "create:sturdy_sheet",
      [
        event.recipes.create.deploying(transition, [
          transition,
          "ae2:charged_certus_quartz_crystal",
        ]),
        event.recipes.create.filling(transition, [
          Fluid.of("create_enchantment_industry:experience", 150),
          transition,
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
