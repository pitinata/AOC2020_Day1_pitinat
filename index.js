let dataArr = [1721,979,366,299,675,1722];
let pairResult = -1;

for(const num of dataArr){
    if(dataArr.includes(2020-num)){
        pairResult = num;
        break;
    }
}

if(pairResult > -1){
    const pairResult_inv = 2020-pairResult;
    console.log(pairResult+' x '+(pairResult_inv)+' = '+(pairResult*pairResult_inv));
}
else{
    console.log('No pair found');
}





