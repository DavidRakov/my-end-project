import { Pool } from "pg";
import "dotenv/config";

export type insertUsersIntoPGFunc = (
  values: Record<string, unknown>
) => Promise<void>;

export const client = new Pool({
  connectionString: process.env.POSTGRESQL_CONNECTION_STRING,
});
export const connectionToPostgres = async () => {
  try {
    await client.connect();
    return "Connected to PostgreSQL";
  } catch (error) {
    return Promise.reject(error);
  }
};
// export const getAllUsersFromJSON = async () => {
//   try {
//     const users: UserInterface[] = await readJsonFileUsers();
//     return users;
//   } catch (error) {
//     return Promise.reject(error);
//   }
// };
export const getAllUsersFromPG = async () => {
  try {
    const queryCount = "SELECT COUNT(*) FROM donors";
    const queryUsers = "SELECT * FROM users";
    const resultCount = await client.query(queryCount);
    const resultUsers = await client.query(queryUsers);

    if (resultCount.rows[0].count > 0) {
      return resultUsers.rows;
    } else {
      return false;
    }
  } catch (error) {
    if (error instanceof Error)
      throw new Error(`Error in getAllUsersFromPG: ${error.message}`);
  }
};

export const insertUsersIntoPG: insertUsersIntoPGFunc = async (val) => {
  try {
    const tableName = "donors";
    const columns = Object.keys(val);
    const values = Object.values(val);
    const query = `INSERT INTO ${tableName} (${columns.join(
      ", "
    )}) VALUES ($1, $2, $3)`;
    await client.query(query, values);
  } catch (error) {
    console.log("failed to insert to PG");
  }
};

// export const insertUsersFromJSONIntoPG = async () => {
//   try {
//     const check = await getAllUsersFromPG();
//     if (check) {
//       console.log("Already have users in PG");
//     } else {
//       const users = await getAllUsersFromJSON();
//       users.forEach(async (user) => {
//         await insertUsersIntoPG([user.email, user.password, user.isadmin]);
//       });
//     }
//   } catch (error) {
//     return Promise.reject(error);
//   }
// };
