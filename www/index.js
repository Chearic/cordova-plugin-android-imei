var toError = function (obj) {
  if (!obj) return new Error('ERROR')
  if (obj instanceof Error) return obj
  if (obj.hasOwnProperty('data')) return new Error(obj.data || 'ERROR')
  return new Error(obj)
}

module.exports = function (cb) {
  window.cordova.exec(function (result) {
    cb(null, result)
  }, function (err) {
    cb(toError(err))
  }, 'ImeiPlugin', 'getDeviceId', [])
}
