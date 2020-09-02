function capitalize (str) {
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase()
}

function isJson(str) {
  try {
    JSON.parse(str)
  } catch(e) {
    return false
  }
  return true
}

function showGroup (content, title='') {
  console.group(`👋 👏 ${title}`)
  console.log(content)
  console.groupEnd()
}

export {
  capitalize, isJson, showGroup,
}
