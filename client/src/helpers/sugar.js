/* eslint-disable node/no-unsupported-features/node-builtins */
function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase()
}

function isJson(str) {
  try {
    JSON.parse(str)
    return true
  } catch (e) {
    return false
  }
}

function showGroup(content, title = '') {
  console.group(`👋 👏 ${title}`)
  console.log('%c prev', 'color: gray', content)
  console.log('%c current', 'color: blue', content)
  console.log('%c next', 'color: green', content)
  console.groupEnd()
}

export { capitalize, isJson, showGroup }
