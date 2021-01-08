const data = require('./data.json')

function categoryIt1() {
  return data.tags.reduce((ary, { name, value }) => {
    const names = ary.map(item => item.name)
    if (names.indexOf(name) !== -1) {
      const ai = ary.find(item => item.name === name)
      const maybeDuplicate = [...ai.value, ...value]
      ai.value = [...new Set(maybeDuplicate)]
    } else {
      ary.push({ name, value })
    }
    return ary
  }, [])
}

function categoryIt2() {
  return data.tags.reduce((ary, { name, value }) => {
    const names = ary.map(({ name }) => name)
    if (names.indexOf(name) >= 0) {
      const ai = ary.find(item => item.name === name)
      ai.value = ai.value.concat(value)
    } else {
      ary.push({ name, value })
    }
    return ary
  }, [])
}

function categoryIt3() {
  const nm = new Map()
  data.tags.forEach(({ name, value }) => {
    if (nm.has(name)) {
      const values = nm.get(name)
      const mightDuplicated = [...values, ...value]
      nm.set(name, [...new Set(mightDuplicated)])
    } else {
      nm.set(name, value)
    }
  })
  return Object.fromEntries(nm)
}

function categoryIt4() {}

// console.log(categoryIt1(data))
console.log(categoryIt3(data))
