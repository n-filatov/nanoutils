const {
  generators: { getArrays },
  times: { TIMES_1M },
  types: { TYPE_1M }
} = require('../_internal/helpers/performance')

module.exports = function() {
  const [small, medium, big] = getArrays(TIMES_1M)
  const cb = (sum, value) => [sum, sum + value]
  const initial = 0

  return {
    type: TYPE_1M,
    argss: [
      [cb, initial, small],
      [cb, initial, medium],
      [cb, initial, big]
    ]
  }
}
