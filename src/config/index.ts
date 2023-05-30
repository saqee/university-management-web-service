import dotenv from 'dotenv'
import path from 'path'
//console.log(process.cwd());

//console.log(path.join(process.cwd(),'.env'))

dotenv.config({path:path.resolve(process.cwd(),'.env')})

export default{
    port: process.env.PORT,
    database_url:process.env.DATABASE_URL,
}