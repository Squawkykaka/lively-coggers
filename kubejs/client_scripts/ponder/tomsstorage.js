Ponder.tags((event) => {
  event.createTag(
    "kubejs:toms_storage",
    "toms_storage:ts.crafting_terminal",
    "Toms Storage.",
    "Blocks and items used to make a storage system.",
    [
      "toms_storage:ts.crafting_terminal",
      "toms_storage:ts.inventory_connector",
    ],
  );
});

Ponder.registry((event) => {
  event
    .create("toms_storage:ts.inventory_connector")
    .scene(
      "crafting_terminal",
      "How to set up a storage system",
      "kubejs:basic_storage_setup",
      (scene, util) => {
        scene.showBasePlate();
        scene.idle(10);
        scene.world.showSection([2, 1, 2], Facing.DOWN);
        scene.idle(10);
        scene
          .text(
            60,
            "The Inventory Connector is the heart of the storage system. You can only have 1 in every network",
            [2.0, 1.5, 2.0],
          )
          .colored(PonderPalette.WHITE)
          .placeNearTarget();
        scene.idle(70);
        scene.world.showSection([1, 1, 2, 0, 1, 2], Facing.DOWN);
        scene.idle(20);
        scene
          .text(
            60,
            "It can connect to any nearby inventorys and access stored items",
            [1, 1, 2.5],
          )
          .placeNearTarget();
        scene.idle(90);
        scene.world.showSection([1, 2, 2, 0, 2, 2], Facing.DOWN);
        scene
          .text(
            80,
            "It also connects through other storages touching to the connector up to 16 blocks away",
            [1, 2.5, 2],
          )
          .placeNearTarget();
        scene.idle(90);

        scene.world.showSection([2, 2, 2, 2, 3, 2], Facing.DOWN);
        scene
          .text(
            60,
            "The cable connector allows you to access the combined storage of your system.",
            [2, 3.5, 2],
          )
          .placeNearTarget();
        scene.idle(70);

        scene.world.showSection([2, 3, 1], Facing.DOWN);

        scene
          .text(
            60,
            "The crafting terminal is the way players read the storage system and craft items",
            [2, 3.5, 1],
          )
          .placeNearTarget();

        scene.idle(70);

        scene
          .text(
            60,
            "It has to be placed on an inventory connector, or cable connector to work.",
            [2, 3.5, 1],
          )
          .placeNearTarget();
      },
    );
});
