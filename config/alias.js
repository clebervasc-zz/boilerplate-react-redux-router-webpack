const path = require('path')

const src = path.resolve('src')

module.exports = {
  atoms: `${src}/scripts/atoms`,
  images: `${src}/images`,
  mocks: `${src}/scripts/mocks`,
  molecules: `${src}/scripts/molecules`,
  organisms: `${src}/scripts/organisms`,
  pages: `${src}/scripts/pages`,
  scripts: `${src}/scripts`,
  styles: `${src}/styles`,
  templates: `${src}/templates`,
  test: `./test`
}
