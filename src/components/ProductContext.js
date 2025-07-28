import React, { createContext } from 'react'

export const ProductContext = createContext;

export const Productprovider = ({children}) => {

    const persondata=[
        {name:"Pradeep"},
        {name:"ram"}
    ]
    
  return (
    <div>
        <ProductContext.Provider value={{persondata}}>
         {children}
        </ProductContext.Provider>
      
    </div>
  )
}
