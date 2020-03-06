const api = require('./api')
const ui = require('./ui')

const onGetBooks = function (event) {
  event.preventDefault()
  api.getBooks()
    .then(ui.getBooksSuccessful)
    .catch(ui.getBooksFailure)
}

module.exports = {onGetBooks}
