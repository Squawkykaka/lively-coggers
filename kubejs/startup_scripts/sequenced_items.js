StartupEvents.registry('item', event => {
	event.create('incomplete_item_cable', 'create:sequenced_assembly')
	event.create('incomplete_inventory_connector', 'create:sequenced_assembly')
})