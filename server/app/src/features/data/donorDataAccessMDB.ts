import { connect } from "mongoose";

export const connectToMongoose = async () => {
  try {
    const res = await connect("mongodb://127.0.0.1:27017/beer_hatora");
    return "Connected to MongoDB";
  } catch (error) {
    return "failed to connect to mongodb";
  }
};
