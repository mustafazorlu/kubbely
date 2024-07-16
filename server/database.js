import mongoose from "mongoose";

const database = async () => {
    try {
        const connection = await mongoose.connect(process.env.MONGODB_URL);
        if (connection) console.log("connected mongodb");
    } catch (error) {
        console.log(error);
    }
};

export default database;
