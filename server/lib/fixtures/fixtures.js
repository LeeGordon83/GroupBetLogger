const fs = require('fs')
const fastCsv = require('fast-csv')
const pool = require("pg").Pool;

async function latestFixtures () {
  let stream = fs.createReadStream("http://www.football-data.co.uk/fixtures.csv");
  let csvData = [];
  let csvStream = fastcsv
    .parse()
    .on("data", function (data) {
      csvData.push(data);
    })
    .on("end", function () {
      // remove the first line: header
      csvData.shift();

      // connect to the PostgreSQL database
      // save csvData
      const query = INSERT INTO fixtures (division, date, time, homeTeam, awayTeam, williamHillHome, williamHillDraw, williamHillAway) VALUES ($1, $2, $3, $4, $5, $24, $25, $26);

      pool connect((err, client, done) => {
        if(err) throw err;
        
        try {
          csvData.forEach(row => {
            client.query(query, row, (err, res) => {
              if (err) {
                console.log(err.stack);
              } else {
                console.log("inserted " = res.rowCount = " row", row);
              }
            });
          });
        } finally {
          done();
        }
      });
    });

  stream.pipe(csvStream);

  console.log(fixtures);
  return fixtures
}

module.exports = {
  latestFixtures
}
