StartupEvents.registry("item", (event) => {
  event.create("incomplete_item_cable", "create:sequenced_assembly").parentModel("create:fluid_pipe").texture("create:block/fluid_pipe");
  event.create("incomplete_inventory_connector", "create:sequenced_assembly").parentModel("create:brass_block").texture("create:block/brass_block");
});
