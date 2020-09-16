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

export {
  capitalize, isJson, showGroup,
}

// https://morioh.com/p/5b34d9858cb5
const flatten = (arr, depth = 1) =>
  arr.reduce((a, v) => a.concat(depth > 1 && Array.isArray(v) ? flatten(v, depth - 1) : v), []);

const deepFlatten = arr => [].concat(...arr.map(v => (Array.isArray(v) ? deepFlatten(v) : v)));


const isObject = val => val !== null && typeof val === 'object';
