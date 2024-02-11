import mongoose from "mongoose";

async function connectToMongodb(url) {
    return mongoose.connect(url);
}

// Exporting the connectToMongodb function
export { connectToMongodb };