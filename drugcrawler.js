var cheerio = require('cheerio');
var request = require('request');

var drugid = 2140902;
for(var i=0; i<1000; i++){
  drugid++;
  drugid+="";
  var options = {
     encoding: "UTF-8",
     uri: "http://terms.naver.com/entry.nhn?docId="+drugid+"&cid=51000&categoryId=51000"
  }

  request(options, function(error, response, html){  //url
      if (error) {throw error};

      var $ = cheerio.load(html);

      var drugname = $(".headword"); //id 값
      var list1 = $("#TABLE_OF_CONTENT4"); //id 값
      var list2 = $("#TABLE_OF_CONTENT5"); //id 값
      var list3 = $("#TABLE_OF_CONTENT6"); //id 값

     console.log(drugname.text() +"!"+list1.next().text() +"!"+list2.next().text() +"!"+list3.next().text() +"\n");
  });

  drugid*=1;
}
