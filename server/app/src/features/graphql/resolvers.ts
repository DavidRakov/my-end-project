const books = [
  { id: "1", title: "The Great Gatsby", authorId: "1", genre: "Classic" },
  { id: "2", title: "To Kill a Mockingbird", authorId: "2", genre: "Classic" },
  { id: "3", title: "The Catcher in the Rye", authorId: "3", genre: "Classic" },
  {
    id: "4",
    title: "Harry Potter and the Philosopher's Stone",
    authorId: "4",
    genre: "Fantasy",
  },
  { id: "5", title: "Tender Is the Night", authorId: "1", genre: "Classic" },
  {
    id: "6",
    title: "Harry Potter and the Chamber of Secrets",
    authorId: "4",
    genre: "Fantasy",
  },
];

const authors = [
  { id: "1", name: "F. Scott Fitzgerald", books: [] },
  { id: "2", name: "Harper Lee", books: [] },
  { id: "3", name: "J.D. Salinger", books: [] },
  { id: "4", name: "J.K. Rowling", books: [] },
];

const resolvers = {
  Query: {
    books: () => books,
    book: (_:never, { id }:{id:string}) => {
      const book = books.find((book) => book.id === id);
      return {
        ...book,
      };
    },
    authors: () => authors,
    authorsWithBooks: () => {
      return authors.map((author) => {
        return {
          ...author,
          books: books.filter((b) => b.authorId === author.id),
        };
      });
    },
    author: (_:never, { id }:{id:string}) => {
      const author = authors.find((auth) => auth.id === id);
      return {
        ...author,
      };
    },
  },

  Book: {
    author(parent: { authorId: string; }) {
      return authors.find((author) => author.id === parent.authorId);
    },
  },

  Author: {
    books: (parent: { id: string; }, _: any, _context: any, { variableValues }: any) => {
      return books.filter(
        (b) => b.authorId === parent.id && b.id !== variableValues.bookId
      );
    },
  },

  Mutation: {
    createBook: (_: any, { input: newBook }: any) => {
      books.push(newBook);
      return newBook;
    },
    updateBook: () => {},
  },
};

export default resolvers;
