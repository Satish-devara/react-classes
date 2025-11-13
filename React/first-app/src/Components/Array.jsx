

import React, { useEffect, useState } from 'react'


const Array = () => {
    const [evenArray, setEvenArray] = useState([]);
    const [maxNumber, setMaxNumber] = useState(0);
    const [secondMaxNumber, setSecondMaxNumber] = useState(0);
    const [vowelsCount, setVowelsCount] = useState(0);
    const [string, setstring] = useState('');
    const [seqCount, setSeqCount] = useState(0);

    useEffect(() => {
        let array = [256,197,86,34,35,36,27,56,57,58,59,60,66,678,0];
        let evenSubArray = array.filter((num) => num%2 == 0).map((num) => num*num);
        setEvenArray(evenSubArray);
        const max = array.reduce((acc,num) => {
            return acc < num ? num : acc;
        },array[0]);
        setMaxNumber(max);
        
        array.sort((a,b) => a-b);

        let count = 1;
        let longest = 1;
        for(let i = 1; i < array.length; i++){
            if(array[i] === (array[i-1]+1)){
                count++;
                longest = Math.max(longest,count);
            }else{
                count = 1;
            }
        }
        setSeqCount(longest);
        
        const secondNumber = array.reduce((acc,num) => {
            if(num > acc && num < max){
                return num;
            }
            return acc;
        },Number.NEGATIVE_INFINITY) 
        setSecondMaxNumber(secondNumber);

    },[]);


    useEffect(() => {
        const count = string.toLowerCase().split('').filter(ch => 'aeiou'.includes(ch)).length;

        setVowelsCount(count);
    },[string]);

    let arr1 = [[1,2], [3,4], [5,6]];
    let arr2 = [[7,8,9,3,5],[1,2,3,4,5,12,12,12,13,14,15]];

    let res = [];
    res = res.concat(...arr1).concat(...arr2);
    console.log(res);


  return (
    <>
    <div>{evenArray.join(',')}</div>
    <div>largest highest number : {maxNumber}</div>
    <div> second highest number : {secondMaxNumber}</div>
    <input type="text"  className='rounded-xl border-2' onChange={(e) => setstring(e.target.value)}/>
    <div>vowels count: {vowelsCount}</div>
    <div>seqCount: {seqCount}</div>
    </>
    
  )
}

export default Array