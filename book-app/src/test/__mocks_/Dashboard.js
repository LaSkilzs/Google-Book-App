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

  findTitles = search => {
    let books = [
      {
        title: "My first Book",
        authors: ["her author", "he author"],
        publisher: "their author company",
        imageLinks: "https://www.image.icon/love",
        infoLink: "https://www.google.com"
      },
      {
        title: "missing title",
        authors: ["her author", "he author"],
        publisher: "their author company",
        imageLinks: "https://www.image.icon/love",
        infoLink: "https://www.google.com"
      },
      {
        title: "%$missingtitle",
        authors: ["her author", "he author"],
        publisher: "their author company",
        imageLinks: "https://www.image.icon/love",
        infoLink: "https://www.google.com"
      },
      {
        title: "missing title",
        errors: "Invaild Search"
      },
      {
        title: "missing title",
        totalItems: 3
      }
    ];

    if (search === "missing title") {
      return books.filter(
        book =>
          book.title.toLowerCase().replace(/\W/g, "") !==
          "missing title".replace(/\W/g, "")
      );
    } else if (!search) {
      return books[3];
    }
  };
}

export default Dashboard;
