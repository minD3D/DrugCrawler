//cmd창에  cd 파일 폴더 디렉토리로 이동
//npm init
//npm install --save cheerio-httpcli
//npm install --save officegen

var cheerio = require('cheerio');
var request = require('request');
var client = require('cheerio-httpcli');
var officegen = require('officegen');
var xlsx = officegen('xlsx');
var fs = require('fs');

var drugid = '2144421';
var url = "http://terms.naver.com/entry.nhn?docId=2144421";
var param = {};
druglist = [];

client.fetch(url, param, function(err, $, html){
  if(err){console.log("error:", err); return;}

  var $ = cheerio.load(html);

  var drugname = $(".headword"); //id 값
  var list1 = $("#TABLE_OF_CONTENT4").next(); //id 값
  var list2 = $("#TABLE_OF_CONTENT5").next(); //id 값
  var list3 = $("#TABLE_OF_CONTENT6").next(); //id 값

 console.log(drugname.text() +"\n")
 console.log (list1.text() +"\n");
 console.log (list2.text() +"\n");
 console.log (list3.text() +"\n");
 console.log ("===============================");

 druglist.push(drugname.text());
 druglist.push(list1.text());
 druglist.push(list2.text());
 druglist.push(list3.text());

  exportToExcel(druglist);
});


function exportToExcel(list){
  var sheet = xlsx.makeNewSheet();
  sheet.name = "test";

  for (var i = 0 ; i < list.length ;i++){

    var value = list[i];
    console.log(value);
    sheet.setCell('a' + i+1, value);
  }

  var strm = fs.createWriteStream('C:/Users/gomdo/nodejs_phantomjs/druglist.xlsx');
  xlsx.generate(strm);

}
