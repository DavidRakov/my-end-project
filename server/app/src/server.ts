
import { createServer } from "http";
import express from "express";
import cors from "cors";
import { Pool } from "pg";
import { config } from "dotenv";
import { createClient  } from 'redis';


const RedisClient = createClient({
    url: 'redis://redis:6379'
});

const port = 4000;

const app = express();

app.use(cors())

const httpServer = createServer(app);

config()


const dbConnect = async () => {
    const pool = new Pool();
    const res = await pool.connect();
    res.release();
    console.log(`\n\nDatabase connection test completed successfully!`);
  };

dbConnect()
.then(() =>  console.log( "connect successfully to PG !!!" ))
.catch((error) => { console.log('error in pg',error) });


httpServer.listen(port, () => {
    console.log(`🚀 Query endpoint ready at http://${port}/graphql`);
    console.log(
        `🚀 Subscription endpoint ready at ws://host:${port}/subscriptions`
    );
});

RedisClient.connect()
.then(() =>  console.log( "connected successfully to Redis client!!!" ))
.catch((error) => {  if (error instanceof Error) console.log(error.message) });