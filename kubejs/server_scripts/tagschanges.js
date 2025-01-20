ServerEvents.tags("block", (event) => {
  const tomblocks = [
    "toms_storage:ts.inventory_cable_connector_framed",
    "toms_storage:ts.inventory_proxy",
    "toms_storage:ts.crafting_terminal",
    "toms_storage:ts.inventory_hopper_basic",
    "toms_storage:ts.level_emitter",
    "toms_storage:ts.inventory_connector",
    "toms_storage:ts.trim",
    "toms_storage:ts.open_crate",
    "toms_storage:ts.inventory_cable",
    "toms_storage:ts.inventory_cable_framed",
    "toms_storage:ts.inventory_cable_connector",
    "toms_storage:ts.inventory_cable_connector_filtered",
  ];

  tomblocks.forEach((block) => {
    event.add("create:wrench_pickup", block);
  });

  const pickonly = [
    "toms_storage:ts.crafting_terminal",
    "toms_storage:ts.inventory_cable_connector_filtered",
    "toms_storage:ts.inventory_cable_connector_framed",
    "toms_storage:ts.inventory_cable_connector",
    "toms_storage:ts.inventory_cable_framed",
    "toms_storage:ts.inventory_cable",
    "toms_storage:ts.inventory_connector",
    "toms_storage:ts.inventory_hopper_basic",
    "toms_storage:ts.inventory_proxy",
    "toms_storage:ts.level_emitter",
    "toms_storage:ts.storage_terminal",
  ];

  pickonly.forEach((block) => {
    event.remove("minecraft:mineable/axe", block);
    event.add("minecraft:mineable/pickaxe", block);
  });
});
