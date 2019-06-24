class API {
  getBooks(query) {
    let fakeData = [
      {
        title: "My first Book",
        authors: ["her author", "he author"],
        publisher: "their author company",
        imageLinks: "https://www.image.icon/love",
        infoLink: "https://www.google.com"
      }
    ];
    if (query) {
      return fetch("https://www.googleapis.com/books/v1/volumes?q=ghost").then(
        response => {
          return fakeData;
        }
      );
    } else {
      return { error: "search not found!" };
    }
  }
}

export default API;
