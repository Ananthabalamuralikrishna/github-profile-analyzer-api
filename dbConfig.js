
import mysql from 'mysql2'

export async function connectDB(url){
    try {
        const connection = await mysql.createConnection({
            host: process.env.DB_HOST,
            user: process.env.DB_USER,
            password: process.env.DB_PASS,
            database: process.env.DB_NAME
        });

        console.log("DB Connected Successfully");
        return connection;
    } catch (err) {
        console.log("DB Connection Error:", err.message);
        throw err;
    }

}


export default connectDB;