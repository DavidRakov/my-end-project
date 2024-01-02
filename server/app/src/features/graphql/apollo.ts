const typeDefs = `#graphql
  enum Genre {
    Mystery
    Fantasy
    Classic
    Fiction
  }

  type Book {
    id: ID!
    title: String!
    authorId: ID!,
    genre: Genre!,
    author:Author
  }

  type Author {
    id: ID!,
    name: String!,
    books: [Book] 
  }

  input NewBookInput{
    _id:ID!
    title:String!
    authorId:ID!
    genre:Genre!
  }

  type Mutation {
      createBook(input: NewBookInput!): Book
      updateBook(input:NewBookInput!):Book
  }
  
  type Query {
    authors:[Author]
    authorsWithBooks:[Author]
    books: [Book]
    book(id:ID!):Book
    getBookByIdWithAuthor(id:ID!):Book
    author(id:ID!):Author
  }
`;

export default typeDefs;
