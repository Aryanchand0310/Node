const fs=require('fs')

function isPrime(num){
    if(num<=1) return false;

    for(let i=2;i<=Math.sqrt(num);i++){
        if(num%i==0) return false;
    }
    return true;
}

const writeStream=fs.createWriteStream("sample.txt")

function getAns(){
    for(let i=2;i<=100;i++){
        if(isPrime(i)) writeStream.write(i.toString()+" ")
    }
}
getAns()

const read=fs.readFileSync("sample.txt")
console.log(read.toString())
