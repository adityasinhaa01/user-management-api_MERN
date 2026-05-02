const mongoose = require('mongoose');

async function connectMongoDB(url){
  mongoose
  .connect(url)
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(`Mongo error: ${err}`));
}

module.exports = {
  connectMongoDB,
}