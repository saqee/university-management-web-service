import app from './app'
import mongoose from 'mongoose'
import config from './config/index';
//console.log("server----",process.cwd());
function startApplication() {
    try {
    mongoose.connect(config.database_url as string)
    console.log('db connect');
    app.listen(config.port, () => {
        console.log('server login');
        
    })
} catch (error) {
    console.log('🪫 database error'+error);
    
}
}
startApplication()