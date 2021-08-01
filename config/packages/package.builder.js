const fs = require('fs')
const pkgDep = require('./package.dependencies.js')
const pkgJsonFileName = 'package.json'

const obj = {}
const dep = []

if (process.argv[2]) {
  const array = process.argv[2].split('+')

  for (let i = 0; i < array.length; i++) {
    if (!pkgDep[array[i] + 'Dependencies']) {
      console.error(array[i] + 'Dependencies' + ' not found in package.dependencies.js')
    } else {
      dep.push(array[i] + 'Dependencies')
    }

    Object.assign(obj, pkgDep[array[i] + 'Dependencies'])
  }
}

fs.readFile(pkgJsonFileName, (_, data) => {
    const json = JSON.parse(data)

    json.dependencies = obj

    fs.writeFile(pkgJsonFileName, JSON.stringify(json,  null, 4), err => {
      if (err) throw err;
        console.log('The "data to append" was appended to file!');
    })
})

// fs.writeFileSync('./package.json', JSON.stringify(obj, null, 4))
console.log('package.json created with ' + dep.join('+'))
