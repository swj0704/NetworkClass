// url은 두가지 형태로 제공됨

const urlString = "https://user:pass@sub.example.com:8080/p/a/t/h?query=string#hash"

//#region 1.WHATWG 방식(full url만 가능)
var myURL = new URL(urlString)
console.log(myURL)
//#endregion

//#region 2. Node.js 래거시 API(부분 url도 가능)

//#endregion