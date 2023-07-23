 const http=require('http')
const url=require('url')
const querystring=require('querystring')

function isPrime(num){
    if(num<=1) return false;
    if(num===2) return true;
    if(num%2===0) return false;
    for(let i=3;i<=Math.sqrt(num);i+=2){
        if(num%i===0) return false;
    }
    return true;
}

const server=http.createServer((req,res)=>{
    const {pathname,query}=url.parse(req.url)
    const {number}=querystring.parse(query)
    if(pathname==="/"){
        res.writeHead(200,{'Content-Type':'text/html'})
        res.write(`<form action="/check" method="get">
        <input type="number" id="number" name="number" placeholder="Enter a number" />
        <input type="submit" value="submit" />
    </form>`)

    res.end()
        
    }else if(pathname==="/check"){
        const num=parseInt(number)
        flag=isPrime(num)
        if(flag){
            res.end("The "+number+" is prime")
        }else{
            res.end("The "+number+" is not prime")
        }
        
    }
    console.log("taskcompleted")
})

server.listen(8000,"localhost")