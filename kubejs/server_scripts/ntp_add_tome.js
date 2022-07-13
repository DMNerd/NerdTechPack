// Listen to player login event
onEvent('player.logged_in', event => {
    event.player.give('eccentrictome:tome')
  })