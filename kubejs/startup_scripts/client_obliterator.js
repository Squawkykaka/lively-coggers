JEIEvents.hideItems(event => {
    event.hide([
      global.nukedItems,
      global.replacedItems,
      'create:refined_radiance_casing',
      'create:shadow_steel_casing',
      'ae2:facade',
      console.log('JEI items nuked!')
    ])
  })
  
//   JEIEvents.addItems(event => {
//     event.add([
//       'kubejs:blahblahblah',
//     console.log('JEI items added!')
//     ])
//   })