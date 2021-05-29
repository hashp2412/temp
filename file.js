const {readFileSync , writeFileSync } =  require('fs')

const first = readFileSync('./static/subfolder/text.txt','utf8')

console.log(first)

writeFileSync('./static/subfolder/text1.txt',` bye bye bye`,{ flag : 'a'})

const {readFile , writeFile} = require('fs')

readFile('./static/subfolder/text2.txt','utf8', (err,result)=>{
    if(err){
        console.log(err.code)
        return
    }
    else
    console.log(result)
})