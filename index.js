const fs = require('fs');

fs.readFile('./input/day1_input.txt', 'utf-8', (err,data) => {
    
    try{
        const dataArr = data.split('\n');
        let pairResult = -1;

        const dataNumberArr = dataArr.map(data => Number(data));

        for(const num of dataNumberArr){
            if(dataNumberArr.includes(2020-num)){
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
    }
    catch(err){
        console.log("Oops! There is an error: ", err)
    };
    
})












