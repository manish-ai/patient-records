import { useEffect, useState } from "react";
 
const useFetch = (url, options) => {
  const [data, setdata] = useState(null);
  const [loading, setloading] = useState(true);
  const [error, seterror] = useState("");
 

const fetchData = async() =>{
    setloading(true)
  try{
    let result = await fetch(url, options)
    .then((res) => {
         if(res.status == 200 || res.status == 201){
           return res.json()
         }else {
            setloading(false);
            seterror(res.error || "Error" );
            return "Error";
         }
        })
    .then((data) => {
        console.log("data", data);
        setdata(data)
        setloading(false);
        return data;
    })
    .catch( err =>{
        setloading(false);
        seterror(err);
        return err;
    })
    return result;
  }
  catch(err){
        setloading(false);
        seterror(err);
        return err;
  }

}

  useEffect(async () => {
     fetchData();
    // return ""
  }, []);
 
  return { data, loading, error };
};
 
export default useFetch;