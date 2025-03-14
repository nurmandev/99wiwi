import mongoose from "mongoose";

const { DB_USER, DB_PASSWORD, DB_HOST, DB_PORT, DB_NAME } = process.env;

const connect = async () => {
  try {
    // const url = `mongodb://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_NAME}?authSource=admin`;
    const url = `mongodb+srv://resume:1234@cluster0.8114dlp.mongodb.net/99wiwi?retryWrites=true&w=majority`;
    await mongoose.connect(url);
  } catch (error) {
    console.error("Failed to connect to database - ", error);
  }
};

export default connect;
