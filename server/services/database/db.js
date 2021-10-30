const mongoose = require('mongoose');
const { MongoMemoryServer } = require('mongodb-memory-server');

function connectDB() {
  return new Promise(async (resolve, reject) => {
    try {
      const mongo = await MongoMemoryServer.create({
        instance: { port: 27017 },
      });
      const uri = mongo.getUri();
      const mongooseOpts = {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      };
      await mongoose.connect(`${uri}emailReports`, mongooseOpts);
      console.log(`MongoDB Connected`);
      resolve();
    } catch (error) {
      console.error(error.message);
      reject();
    }
  });
}

module.exports = { connectDB };
