var playlist = {Black keys: 'Hi/lo'}, {Nirvana: 'Come as you are'}, {RHCP: 'Look around'}

function updatePlaylist(obj, key, value ) {

Object.assign({}, [key]: value)

return obj
}

function removeFromPlaylist(obj, key) {
  delete obj.key
  return obj
}