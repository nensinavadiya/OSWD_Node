const mysql = require('mysql2');


const connection = mysql.createConnection({
  host: 'localhost', 
  user: 'root', 
  password: 'root', 
  database: 'nodetest', 
});


function connectToDatabase() {
  return new Promise((resolve, reject) => {
    connection.connect((err) => {
      if (err) reject(err);
      else resolve('Connected to MySQL database');
    });
  });
}


function insertRecord() {
  return new Promise((resolve, reject) => {
    const employee = {
      name: 'Raj Safwan',
      department: 'IT',
      salary: 50000,
    };

    connection.query('INSERT INTO employee SET ?', employee, (err, result) => {
      if (err) reject(err);
      else resolve('Record inserted successfully');
    });
  });
}


function displayAllRecords() {
  return new Promise((resolve, reject) => {
    connection.query('SELECT * FROM employee', (err, results) => {
      if (err) reject(err);
      else resolve(results);
    });
  });
}


async function main() {
  try {
    console.log(await connectToDatabase());
    console.log(await insertRecord());
    const allRecords = await displayAllRecords();
    console.log('All Records in the employee table:');
    console.log(allRecords);
  } catch (error) {
    console.error('Error:', error);
  } finally {
    connection.end();
  }
}


main();