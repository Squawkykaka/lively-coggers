ServerEvents.recipes((event) => {
  // Works with the "nuke list" file to remove all related recipes to items you want to remove

  let itemsToRemove = [global.itemsToRemove];

  // Remove all recipes with an input of any item on the nuke list
  event.remove({
    input: itemsToRemove,
  });

  // Remove all recipes with an output of any item on the nuke list
  event.remove({
    output: itemsToRemove,
  });
});
