var path = require('path')

// 경로 관련 전역 변수
console.log(__dirname)  // 현재 디렉토리 전체 경로
console.log(__filename) // 현재 파일 전체 경로

// path 모듈 메서드(전체 경로에서 필요한 부분만 추출)
console.log(path.dirname(__filename))   // 디렉토리 경로
console.log(path.extname(__filename))   // 파일 확장자
console.log(path.basename(__filename))  // 파일 이름
console.log(path.parse(__filename))     // 객체로 변환

// 경로 생성
var newPath = path.format({
    root: 'C:\\',
    dir:'C:\\Users\\user\\Documents\\networkA\\NetworkClass\\chap03',
    base : 'ex01_path.js',
    ext: '.js',
    name : 'ex01_path'
})

//path.join : 인자를 조합하여 경로 string 생성
