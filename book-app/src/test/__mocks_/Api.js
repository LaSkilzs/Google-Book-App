class API {
  fakeData = [
    {
      title: "first Book",
      authors: ["His Author", "Her Author"],
      publisher: "Their Company",
      imageLink: { small: "https://www.image.com" },
      infoLink: "https://www.google.com"
    }
  ];

  async getBooks(query) {
    const response = await new Promise(resolve => {
      resolve(fakeData);
    });
  }
}

export default API;
