// createSlug.js
function createSlug(title, posts) {
  title = "Hello World";
    return title.toLowerCase().split(' ').join('-');
  }
  
  module.exports = { createSlug };
  