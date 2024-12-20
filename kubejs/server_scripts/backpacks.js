BlockEvents.rightClicked(function (event) {
    const blockid = event.block.getId()

    const applied_item = "create:andesite_alloy"

    if (blockid == "sophisticatedbackpacks:copper_backpack") {
        if (event.player.getItemInHand(0).getId() == applied_item) {
            event.block.set("sophisticatedbackpacks:iron_backpack")
            event.cancel()
        }
    }
})

function backpackRecipes(backpack, material, new_inventory, new_upgrade_slots, new_id) {
    BlockEvents.rightClicked(backpack, function (event) {
        if (event.player.getItemInHand(0).getId() != material) return
        // event.block.set(new_id)
        const entitydata = event.block.getEntityData()
        event.block.setEntityData({
            backpackData: {
                id: new_id,
                tag: {
                    inventorySlots: new_inventory,
                    upgradeSlots: new_upgrade_slots
                }
            }
        })

        event.getPlayer().tell(entitydata.get("backpackData"))

        // entitydata.set("backpackData.tag.inventorySlots", new_inventory)
        // entitydata.set("backpackData", {
        //     id: new_id,
        //     tag: {
        //         inventorySlots: new_inventory,
        //         upgradeSlots: new_upgrade_slots
        //     }
        // })
        event.cancel()
    })
}

backpackRecipes("sophisticatedbackpacks:copper_backpack", "create:andesite_alloy", 45, 9, "sophisticatedbackpacks:iron_backpack")