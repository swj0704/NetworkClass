// 공통 코드
var http = require('http');
var querystring = require('querystring');

// 드라마 목록
var dramaList = [
    {title: '나의 아저씨', actor: '아이유, 이선균'},
    {title: '미스터 션샤인', actor: '김태리, 이병헌'}
]


//#region 1. get 방식 처리
var url = require('url');
var server = http.createServer(function(req, res){
    console.log('req.url : ', req.url);

    var parsedUrl = url.parse(req.url);     // url parsing
    console.log('parsedUrl ', parsedUrl);

    var qs = querystring.parse(parsedUrl.query);  // querystring parsing
    console.log('qs ', qs);

    // 드라마 목록에 데이터 추가
    if(qs.title && qs.actor){
        dramaList.push({title: qs.title, actor: qs.actor});
        // 302 Found 리다이렉트 상태 응답 코드: 
        // 클라이언트가 요청한 리소스가 Location 헤더에 주어진 URL로 일시적으로 이동되었음
        res.writeHead(302, {'Location': 'http://localhost:8080'});
        res.end();
    }else{
        showDramaListUsingGet(res);  // 결과를 클라이언트로 전송
    }
}).listen(8080, function(){
    console.log('8080 포트에서 대기중');
});
//#endregion

function showDramaListUsingGet(res){
    res.writeHead(200, {'Content-Type': 'text/html;charset=utf-8'});
    res.write(`<html><body><h1>My Favorite Drama</h1><ul>`);
    for(var i=0; i<dramaList.length; i++){
        res.write(`<li>${dramaList[i].title}(${dramaList[i].actor})</li>`);
    }
    res.write('</ul>');
    res.write(`---------------------------------------------------
    <h2>Add Drama</h2>
    <form method="get" action="http://localhost:8080">
        <p>제목 <input type="text" name="title"></p>
        <p>배우 <input type="text" name="actor"></p>
        <input type="submit">
    </form>`)
    res.end(`</body></html>`);
}
