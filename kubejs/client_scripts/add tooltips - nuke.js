ItemEvents.tooltip((event) => {
  // Works with the "nuke list" file to add a tooltip to items you want to remove, displaying that it's been disabled.

  event.add([global.itemsToRemove], Text.red("This item has been disabled"));
  // Change the text to whatever you want!
  // You can change the colour too!
});
