import "dotenv/config";
import chalk from "chalk";
// import { connectionToPostgres } from "./dataAccess/postgreSQL";
import cors from "cors";
import { expressMiddleware } from "@apollo/server/express4";
// import { redisConnect } from "./cache/redisConnect";
import express from "express";
import { ApolloServerPluginDrainHttpServer } from "@apollo/server/plugin/drainHttpServer";
import { ApolloServer } from "@apollo/server";
import { WebSocketServer } from "ws";
import { makeExecutableSchema } from "@graphql-tools/schema";
import { useServer } from "graphql-ws/lib/use/ws";
import { createServer } from "http";
import { connectToMongoose } from "./features/data/donorDataAccessMDB";
import apolloLogger from "./features/graphql/logger/apolloLogger";
import typeDefs from "./features/graphql/apollo";
import resolvers from "./features/graphql/resolvers";
const app = express();

export const httpServer = createServer(app);

const wsServer = new WebSocketServer({
  server: httpServer,
  path: "/graphql",
});

const schema = makeExecutableSchema({ typeDefs, resolvers });
const serverCleanup = useServer({ schema }, wsServer);

const server = new ApolloServer({
  schema,
  plugins: [
    ApolloServerPluginDrainHttpServer({ httpServer }),
    apolloLogger,
    {
      async serverWillStart() {
        return {
          async drainServer() {
            await serverCleanup.dispose();
          },
        };
      },
    },
  ],
});

const startApolloServer = async () => {
  await server.start();
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use(
    "/graphql",
    cors({
      origin: [process.env.WHITE_LIST || "http://localhost:3000"],
      credentials: false,
    }),
    expressMiddleware(server)
  );

  httpServer.listen(4500, () => {
    console.log(`🚀 Server ready at http://localhost:4500/graphql`);
  });
};

startApolloServer()
  .then(() => {
    connectToMongoose()
      .then((message) => {
        console.log(chalk.magentaBright(message));
      })
      .catch((error) =>
        console.log(
          chalk.redBright("Connect to mongoDB Error: ", error.message)
        )
      );
  })
  // .then(() => {
  //   connectionToPostgres()
  //     .then((message) => console.log(chalk.magentaBright(message)))
  //     .catch((error) => console.log(error.message));
  // })
  // .then(() => {
  //   redisConnect()
  //     .then((message) => {
  //       console.log(chalk.magentaBright(message));
  //     })
  //     .catch((error) =>
  //       console.log(chalk.redBright("Connect to redis Error: ", error.message))
  //     );
  // });
