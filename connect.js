import mongoose from "mongoose";

async function connectTOMongodb(url){
  return mongoose.connect(url)
}

module.exports ={
    connectTOMongodb
}