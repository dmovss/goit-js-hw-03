function slugify(title) {
  const lowerCaseTitle = title.toLowerCase();
  const wordsArray = lowerCaseTitle.split(' ');
  const slug = wordsArray.join('-');
  return slug;
}
console.log(slugify("Arrays for beginners"));
console.log(slugify("English for developer"));
console.log(slugify("Ten secrets of JavaScript"));
console.log(slugify("How to become a JUNIOR developer in TWO WEEKS"));
