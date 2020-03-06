const showBooksTemplate = require('../templates/book-listing.handlebars')
const store = require('../store.js')

const getBooksSuccessful = (data) => {
  const showBooksHtml = showBooksTemplate({books: data.books})
  $('.book-content').append(showBooksHtml)
}

const getbBooksFailure = () => {
  $('.book-content').text('sad days')
}

module.exports = {
  getBooksSuccessful,
  getbBooksFailure
}
