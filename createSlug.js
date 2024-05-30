function createSlug(title, posts) {
if (!title || typeof title !== 'string') {
    throw new Error('Titolo non valido');
  }
  let slug = title.toLowerCase().split(' ').join('-');
  
  
  let originalSlug = slug;
  let count = 1;
  while (posts.includes(slug)) {
    slug = `${originalSlug}-${count}`;
    count++;
  }
  
  return slug;
}

module.exports = { createSlug };
