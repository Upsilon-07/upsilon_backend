require("dotenv").config();
const { log } = require("console");
const fs = require("fs");
const mysql = require("mysql2/promise");

const migrate = async () => {
  const { DB_HOST, DB_USER, DB_PASSWORD, DB_NAME } = process.env;
  const connection = await mysql.createConnection({
    host: DB_HOST,
    user: DB_USER,
    password: DB_PASSWORD,
    multipleStatements: true,
  });
  await connection.query(`drop database if exists ${DB_NAME}`);
  await connection.query(`create database ${DB_NAME}`);
  await connection.query(`use ${DB_NAME}`);
  const sql = fs.readFileSync("./src/database/upsilon_db.sql", "utf8");
  await connection.query(sql);
  const courses = fs.readFileSync("./src/database/data-1-courses.sql", "utf8");
  await connection.query(courses);
  const lessons = fs.readFileSync("./src/database/data-2-lessons.sql", "utf8");
  await connection.query(lessons);
  const exercises = fs.readFileSync("./src/database/data-3-exercises.sql", "utf8");
  await connection.query(exercises);
  connection.end();
};

try {
  migrate();
  console.log("DB reset completed!")
} catch (err) {
  console.error(err);
}