const moongose = require("mongoose")

const connectDB = async ()=>{
    try {
        const {connection} = await moongose.connect(process.env.DB_CONNECTION)
        const url=`${connection.host}:${connection.port}`
        console.log(`MongoDB connected in ${url} `);
    } catch (error) {
        console.log(`ERROR mongoDB${error.message}`);
    }
}
module.exports = {connectDB}