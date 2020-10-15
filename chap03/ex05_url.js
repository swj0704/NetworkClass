// url은 두가지 형태로 제공됨

const urlString ="https://user:pass@sub.example.com:8080/p/a/t/h?query=string&query2=string&query3=string#hash";

//#region 1. WHATWG 방식 (full URL만 가능)
//url parsing
// var myurl = new URL(urlString);
// console.log(myurl);

// //searchParams 추출가능
// console.log(myurl.searchParams);
// console.log(myurl.searchParams.get("query"));
// console.log(myurl.searchParams.has("query"));
// console.log(myurl.searchParams.getAll("query"));
// console.log(myurl.searchParams.keys());
// console.log(myurl.searchParams.values());

//#endregion

//#region  2. NodeJS 레거시 API(부분 url도 가능)
var url = require("url");

// url 파싱
var myURL = url.parse(urlString);
//console.log(myURL);

// qeurystring 모듈 사용
const qeurystring = require("querystring")
const query = qeurystring.parse(myURL.query)
console.log(query)
console.log(qeurystring.stringify(query))


//단축 URL 처리(래거시 방식만 가능)
//var parseUrl = new URL('/?num1=100&num2=200')

var parseUrl = url.parse('/?num1=100&num2=200')

console.log(parseUrl)

//#endregion