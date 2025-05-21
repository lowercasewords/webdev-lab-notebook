const url = "https://anapioficeandfire.com/api/books/";

const app = document.querySelector("#books");

function addBook(book) {
  let title = document.createElement("h4");
  title.textContent = book.name;
  app.append(title);

  let author_div = document.createElement("div");
  book.authors.forEach((author_name) => {
    let author = document.createElement("p");
    author.textContent = `by ${author_name}`;
    author_div.append(author);
  });
  app.append(author_div);

  let release_year = document.createElement("p");
  release_year.textContent = book.released.substr(0, 4);
  app.append(release_year);

  let pages = document.createElement("p");
  pages.textContent = `${book.numberOfPages} pages`;
  app.append(pages);

  app.append(document.createElement("br"));
}

const fetchData = (url) => {
  // Fetch all books from the API of Ice and Fire
  //  and append them to the DOM
  // Create an element for each book that contains
  //  title, author, publication year, and number of pages
  // Update the styles in JavaScript to center all
  //  the books in the container given

  fetch(url)
    .then((response) => response.json())
    .then((book_entries) =>
      book_entries.forEach((book_entry) => {
        addBook(book_entry);
      })
    )
    .catch((error) => console.log("error fetching:", error))
    .finally(() => {
      app.removeChild(loading);
    });
};
fetchData(url);
