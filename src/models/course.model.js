const database = require("../database/database-config")

const getAll =()=>{

    return database.query("SELECT * FROM courses")
    .then(([results])=>console.log(results))

}

module.exports = {
    getAll
}