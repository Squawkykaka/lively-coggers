// Server Scripts

ServerEvents.recipes(event => {
    event.remove({
      input: global.nukedItems
    })
})