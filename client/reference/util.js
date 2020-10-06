const { array } = require("prop-types");

function flatDeep(ary, d = 1) {
  return d > 0 ? ary.reduce((acc, val) => acc.concat(Array.isArray(val) ? flatDeep(val, d - 1) : val), [])
    : arr.slice()
}

const arr = [1, 2, [3, 4, [5, 6]]];
flatDeep(arr, Infinity); // [1, 2, 3, 4, 5, 6]