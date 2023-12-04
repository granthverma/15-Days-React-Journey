import React, { useEffect ,useState } from 'react'
// import { useState } from 'react';
import{ useLoaderData } from 'react-router-dom'

function Github() {
    const  data = useLoaderData()
//     const [data , setData] = useState ([])
//     useEffect(()=>{
//     fetch('https://api.github.com/users/granthverma')
//    .then(response => response.json())
//    .then(data =>{
//     console.log(data);
//     setData(data)
//    })


    // } ,[])
    return (
      

<div className='bg-orange-500 text-white text-3xl p-12  text-center '> 
    Github UserName :{data.login} 
   Name :{data.name}

   Location :{data.location} 
   {/* <img src={data.avatar_url} alt="Git picture" width={300} /> */}


        </div>
     
    )
}

export default Github

export const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/granthverma')
     return response.json()
}
