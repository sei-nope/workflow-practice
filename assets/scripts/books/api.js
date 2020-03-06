'use strict'
// Contains all of my AJAX calls to the api
const config = require('../config')

const getBooks = () => {
  return $.ajax({
    method: 'GET',
    url: config.apiUrl + '/books'
  })
}

module.exports = {
  getBooks
}
