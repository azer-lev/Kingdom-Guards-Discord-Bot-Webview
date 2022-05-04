const mysql = require('mysql2/promise')
const config = require('../config.json')

async function createConnection() {
    try {
        const con = await mysql.createConnection({
            user: config.sql.user,
            password: config.sql.password,
            host: config.sql.host,
            database: config.sql.database
        });
        return con;
    }catch(ex) {
        if(config._DEBUG_)
            console.log(ex)
        console.log("Data base connection could not be established!")
    }
}

module.exports.getEvents = async function() {
    const connection = await createConnection()
    if(connection !== undefined) {
        const sql = "SELECT * FROM `event_struct` WHERE `event_time` != '-1'"
        const [rows, fields] = await connection.execute(sql)
        return rows;
    }
    return undefined
}