var cheerio = require('cheerio');
var request = require('request');
 
var postnum = 0;
var hospitalURL='http://sev.iseverance.com/customer/faq/hopital_faq/view.asp?con_no=6331&page=1&SearchField=&SearchWord=&orderBy=open_date%20DESC&rnum=';
for(var i=0; i<45; i++){
  postnum++;
  postnum+="";
  var options = {
     encoding: "UTF-8",
     uri: hospitalURL+postnum
  }

  request(options, function(error, response, html){  //url
      if (error) {throw error};

      var $ = cheerio.load(html);
      var postName = $(".title_date"); 
      var postContent = $(".bbsview_content"); 

     console.log(postName.text()+"!"+postContent.text() +"!"+(hospitalURL+postnum+"") +"\n");
  });

  postnum*=1;
}


//var Hangultest = require('./hangultest.js');
// var fs = require('fs');
// var druglist = [] ;
// fs.readFile('./urlcrawler.csv', 'utf8', function(err, data) {
//   // the data is passed to the callback in the second argument
//   druglist=data.split('\n');
 
//   setTimeout(function() {
//     for(var j=0; j<druglist.length/9; j++){
      
//           if(druglist[j]!=null&&druglist[j]!='undefined'){
//             var options = {
//               encoding: "UTF-8",
//               uri: "" + druglist[j]
//            }
      
//           // console.log(druglist[j]);
//            request(options, function(error, response, html){  //url
//                if (error) {throw error};
         
//                var $ = cheerio.load(html);
         
//                var drugname = $(".headword").text(); //id 값
//                var synonyms = Hangultest.hanguler(drugname);
//                var efficiency = $("#TABLE_OF_CONTENT4").next().text(); //효능효과
//                var howtouse = $("#TABLE_OF_CONTENT5").next().text(); //복용방법
//                var precaution = $("#TABLE_OF_CONTENT6").next().text(); //주의사항
//                var imgurl = $("#innerImage0").attr('data-src')+"";              
               
//               // 이름 | 동음어 | 효능효과 | 복용방법 | 주의사항 | url | 이미지url |
             
//               var addingdata;
//               if(imgurl==null)
//               addingdata=(drugname+"!"+synonyms +"!"+efficiency.replace('\n','')+"!"+howtouse.replace('\n','')+"!"+precaution.replace('\n','')+"!"+druglist[j]+"\n");
//               else
//               addingdata=(drugname+"!"+synonyms +"!"+efficiency.replace('\n','')+"!"+howtouse.replace('\n','')+"!"+precaution.replace('\n','')+"!"+druglist[j]+"!"+imgurl.replace('\n','')+"\n");

//                fs.appendFile('data.txt', addingdata, function (err) { if (err) throw err; });
               
//            });         
//           } 
//       }
   
//   }, 1000); 
// });


