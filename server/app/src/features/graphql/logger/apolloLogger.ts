import { BaseContext, GraphQLRequestContext } from "@apollo/server";
import chalk from "chalk";

const apolloLogger = {
  async requestDidStart({
    request,
    response,
  }: GraphQLRequestContext<BaseContext>) {
    const start = Date.now();
    await response;
    const duration = Date.now() - start;
    request.http &&
      request.operationName !== "IntrospectionQuery" &&
      console.log(
        chalk.cyanBright(
          `[${new Date().toLocaleDateString()} ${new Date().toLocaleTimeString()} ${
            request.operationName
          } ${request.query} - ${duration}ms]`
        )
      );
  },
};

export default apolloLogger;
