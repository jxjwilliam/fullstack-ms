function MakeQuerablePromise(promise) {
  if (promise.isResolved) return promise
  let isPending = true;
  let isRejected = false
  let isFullfilled = false

  const result = promise.then(
    v => {
      isFullfilled = true
      isPending = false
      return v
    },
    e => {
      isRejected = true
      isPending = false
      throw e
    }
  )

  result.isFullfilled = function () { return isFullfilled }
  result.isPending = function () { return isPending }
  result.isRejected = function () { return isRejected }

  return result
}