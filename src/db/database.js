const mysql = require('mysql2/promise');

const conectDB = async ()=>{
    try{
        return await mysql.createConnection({
            host:'localhost',
            user:'root',
            password:'',
            database:'tasks_db'
        })

    }catch(error){

    }
   
}
module.exports ={conectDB}