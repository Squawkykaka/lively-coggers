JEIEvents.hideItems(event => {

  // Works with the "nuke list" file to remove all items you want to remove from being visible in JEI (also works with EMI, if JEI is installed as well)

  event.hide([
    global.itemsToRemove
  ])
  
})

