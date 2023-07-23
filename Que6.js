const http=require('http')
const url=require('url')
const querystring=require('querystring')

function fibo(a,b,n){
    let sum=0;
    for(let i=2;i<n;i++){
        sum=a+b;
        a=b;
        b=sum;
    }
    return sum
}

const server=http.createServer((req,res)=>{
    const {pathname,query}=url.parse(req.url)
    const {number}=querystring.parse(query)

    if(pathname==="/"){
        res.writeHead(200,{"Content-Type":"text/html"})
        res.write(`
        <form action="/fib" method="get">
            <input type="number" id="number" name="number" placeholder="Enter the number"/>
            <input type="submit" value="submit"/>
        </form>
        `)
        res.end()
    }
    else if(pathname==="/fib"){
        const num=parseInt(number)
        const ans=fibo(0,1,num)
        res.end("The "+number+"th fibonacci number is "+ans)
    }
})

server.listen(8000,"localhost")