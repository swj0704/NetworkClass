var http = require("http")

//#region 1. http 서버 구동 방식
// var server = http.createServer()


// // 클라이언트의 요청이 있으면 발생
// server.on('request', function(req, res){
//     res.write("<h1> Welcome ")
//     res.end("to my Server")
// })

// server.on("listening", () => console.log('8080포트에서 대기중'))

// server.listen(8080)


//#endregion


//#region 2. http 서버 구동 방식
// var server = http.createServer(function(req, res){
//     res.write("<h1> Welcome ")
//     res.end("to my Server 2")
// }).listen(8080, () => console.log('8080포트에서 대기중'))

//#endregion


//#region 3. request, response 메세지
// var server = http.createServer(function(req, res){

//     console.log("req.headers", req.headers)
//     console.log("req.method", req.method)
//     console.log("req.url", req.url)

//     res.statusCode = 200
//     res.statusMessage = "OK"
//     res.setHeader("Content-Type", "text/html;charset=utf-8")
//     res.writeHead(200, "Okay", {"Content-Type" : 'text/plan;charset=utf-8', 'myname' : 'Wonjoon'})

//     res.end("<h1>안녕하세요 반갑습니다<h1>")
// }).listen(8080, () => console.log('8080포트에서 대기중'))
//#endregion

//#region 4. request, response 메세지
// var server = http.createServer(function(req, res){

//     res.end(`<!DOCTYPE html>
//     <html lang="en">
//     <head>
//         <meta charset="UTF-8">
//         <meta name="viewport" content="width=device-width, initial-scale=1.0">
//         <title>Document</title>
//     </head>
//     <body>
//         <h1>안녕하세요</h1>
//         <img src="https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2F20130114_219%2Fjohh340_1358097820464Ljxlo_JPEG%2FFC_%25B9%25D9%25B8%25A3%25BC%25BF%25B7%25CE%25B3%25AA.jpg&type=sc960_832" alt="">
//     </body>
//     </html>`)
// }).listen(8080, () => console.log('8080포트에서 대기중'))
//#endregion

//#region 5. html 파일을 응답으로 제공
// var fs = require("fs")
//  var server = http.createServer(function(req, res){
//     fs.readFile('./test.html', (err, data) => {
//         if(err){throw err}
//         res.end(data)
//     })
// }).listen(8080, () => console.log('8080포트에서 대기중'))

//#endregion

//#region 6. routing 처리
var fs = require("fs")
 var server = http.createServer(function(req, res){
    console.log('req.url', req.url)
    if(req.url === '/'){
        fs.readFile('./test.html', (err, data) => {
            if(err){throw err}
            res.end(data)
        })
    } else if(req.url === '/second'){
        res.write('<h1>Second page<h1>')
        res.end(`<h2><a href='/third'>third page</a></h2>`)
    } else if(req.url === '/third'){
        res.end('<h1>Third page<h1>')
    }
}).listen(8080, () => console.log('8080포트에서 대기중'))

//#endregion