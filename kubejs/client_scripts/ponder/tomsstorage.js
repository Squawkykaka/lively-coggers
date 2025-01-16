Ponder.tags((event) => {
    event.createTag("kubejs:toms_storage", "toms_storage:ts.crafting_terminal", "Toms Storage.", "Blocks and items used to make a storage system.", [
        "toms_storage:ts.crafting_terminal",
        "toms_storage:ts.inventory_connector"
    ])
})

Ponder.registry(event => {
    event.create("toms_storage:ts.inventory_connector")
        .scene("crafting_terminal", "How to set up a storage system", "kubejs:inventory_connector",
        (scene, util) => {
            scene.showBasePlate()
            scene.idle(10)
            scene.showStructure()
        }
    )
})