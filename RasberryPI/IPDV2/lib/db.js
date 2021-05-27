let mysql = require('mysql');
let connection = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"test",
    charset : 'utf8'

})
connection.connect((err)=>{
    if(!!err){
        console.log(err);
    }else{
        console.log("Connected...");
    }
})
module.exports = connection;
