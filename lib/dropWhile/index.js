import curry from '../curry'
import toArray from '../toArray'

export default curry(function dropWhile(cb, arr) {
  var len = 0
  while (arr.length && cb(arr[len])) {
    len++
  }
  return toArray(arr).slice(len)
})