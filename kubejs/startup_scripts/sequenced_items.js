StartupEvents.registry("item", (event) => {
  event
    .create("incomplete_item_cable", "create:sequenced_assembly")
    .parentModel("create:item/fluid_pipe");
  event
    .create("incomplete_inventory_connector", "create:sequenced_assembly")
    .parentModel("create:block/brass_block");
});
