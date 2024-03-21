
import mongoose from "mongoose"

export const Connection = async (username, password) =>{
const URL = `mongodb+srv://${username}:${password}@yaadien.m1pcmiw.mongodb.net/?retryWrites=true&w=majority&appName=yaadien`;

    try{
        await mongoose.connect(URL, {useNewurlParser: true});
        console.log("Database Connected Successfully");

    }catch(error){
        console.log("Error while Connecting with databse"); 

    }
}

export default Connection;