import mongoose from "mongoose";
import colors from "colors";





;
const connectDB = async ()=>{
    try {
        const con = await mongoose.connect(`${process.env.MONGO_URL}`);
        console.log(`Connected to MongoDB ${con.connection.host}`.bgWhite);  // success message if connected successfully
    } catch (error) {
       console.log(`MongoDb connection error: ${error}`); 
    }
}

export default connectDB; 