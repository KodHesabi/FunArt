
var mysql = require('mysql')

var baglanti = mysql.createConnection({
  host : 'localhost',
  user : 'root',
  password : '',
  
});

baglanti.connect(function(err){
  if(err) throw err;
  console.log("Baglanti Kuruldu")
})