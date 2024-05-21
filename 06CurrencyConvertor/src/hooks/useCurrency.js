import { useEffect, useState } from "react";


function useCurrencyInfo(currency){

    const [data,setData] = useState(null);
     useEffect( ()=>{
        let url = `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json` //link is not working 
        fetch(url)
        .then((res)=> res.json())
        .then((res)=> setData(res[currency]))
        console.log(data);


    },[currency])

    return data
    
   
}

export default useCurrencyInfo;
// https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/usd.json

