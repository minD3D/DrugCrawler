var cheerio = require('cheerio');
var request = require('request');
var page = 0;
var druglist = [];

for(var i=0; i<3; i++){
    page++;
    page+="";
    var options = {
       encoding: "UTF-8",
       uri: "http://sev.iseverance.com/customer/faq/hopital_faq/?page="+page
    }
    request(options, function(error, response, html){  //url
        if (error) {throw error};
  
        var $ = cheerio.load(html);
  
        var postElements = $(".title");
        postElements.each(function() {
        var postTitle = $(this).find("strong").text();
        var postUrl = $(this).find("a").attr("href");
        postUrl+="";
        postUrl = postUrl.replace("/entry","http://terms.naver.com/entry");
        druglist.push(postUrl);    
        console.log(postUrl);
        });
    });
    //      druglist.push(drug);
    page*=1;
  }