StartupEvents.registry("item", (event) => {
  event
    .create("incomplete_item_cable", "create:sequenced_assembly")
    .parentModel("create:item/fluid_pipe");
  event
    .create("incomplete_inventory_connector", "create:sequenced_assembly")
    .parentModel("create:block/brass_block");
  
  // event
  //   .create("incomplete_silicon_press", "create:sequenced_assembly")
  //   .texture("ae2:item/silicon_press");
  // event
  //   .create("incomplete_calculation_press", "create:sequenced_assembly")
  //   .texture("ae2:item/calculation_processor_press");
  // event
  //   .create("incomplete_engineering_press", "create:sequenced_assembly")
  //   .texture("ae2:item/engineering_processor_press");
  // event
  //   .create("incomplete_logic_press", "create:sequenced_assembly")
  //   .texture("ae2:item/logic_processor_press");
});
