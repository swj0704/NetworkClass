var md = require("./printHello")
const readline = require('readline')

const rl = readline.createInterface({
    input : process.stdin,
    output : process.stdout
})
//md.helloWorld(4)
rl.question("몇번 반복 할까요?", (answer) =>
md.helloWorld(answer),
rl.close)
