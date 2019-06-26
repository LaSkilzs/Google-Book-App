class Dashboard {
  getBooks = search => {
    let books = [
      {
        title: "My first Book",
        authors: ["her author", "he author"],
        publisher: "their author company",
        imageLinks: "https://www.image.icon/love",
        infoLink: "https://www.google.com"
      },
      {
        errors: "Invaild Search"
      },
      {
        totalItems: 0
      }
    ];

    if (search) {
      return books[0];
    } else if (!search) {
      return books[1];
    } else {
      return books[2];
    }
  };
}

export default Dashboard;
