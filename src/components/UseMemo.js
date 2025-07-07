import React, { useMemo } from 'react'

const UseMemo = () => {

  const products= useMemo(()=> [
    {
        prodname:"TV",
        price:9000
    },
    {
        prodname:"fridge",
        price:20000
    },
    {
        prodname:"fan",
        price:32000
    },
    {
        prodname:"mixer",
        price:30000
    },
    {
        prodname:"iron",
        price:40000
    },
    {
        prodname:"xyz",
        price:4000
    },
    {
        prodname:"xyz",
        price:4000
    },
    {
        prodname:"pqr",
        price:3000
    }
  ],[])

  const expensiveProd =useMemo(()=>{
    console.log('Filtering expensive products...');
    return products.filter(prod=> prod.price> 10000)
  },[products])

  return (
    <div>
        {
            expensiveProd.map((item)=>{
                return <p>{item.prodname}</p>
            })
        }
      
    </div>
  )
}

export default UseMemo
