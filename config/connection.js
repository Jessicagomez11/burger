//here is where you are going to  setup the code to connect Node to mysql
//make sure you export the connection

var connection = mysql.createConnection ({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password:'root',
    database: 'burgers_db'
})

connection.connect(function (err){
    if (err) throw err;

    console.log('connected as id ' + connection.threadid)
    //we might not need this in here...
    connection.end()
})

module.exports = connection