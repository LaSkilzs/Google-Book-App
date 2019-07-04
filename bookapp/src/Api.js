class API {
  static async getBooks(query) {
    const response = await fetch(
      `https://www.googleapis.com/books/v1/volumes?q=${query}`
    );
    const data = await response.json();
    return data;
  }
}

export default API;
