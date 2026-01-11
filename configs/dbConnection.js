const mongoose = require("mongoose");

exports.dbConnect = async () => {
    try {
        await mongoose.connect(`${process.env.MONGO_URI}`);
        console.log(`database connected successfully. `);
        
    } catch (error) {
        console.error(`Error From dbConnection :: ${error}`);
        process.exit(1);
    }
}