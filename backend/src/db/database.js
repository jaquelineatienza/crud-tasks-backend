import mysql from 'mysql2/promise';

export const conectDB = async ()=>{
    try{
        return await mysql.createConnection({
            host:'localhost',
            user:'root',
            password:'',
            database:'tasks_db'
        })
        console.log('la base de datos se conecto correctamente')
    }catch(error){

    }
}