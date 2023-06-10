import React, { createContext, useContext, useState } from 'react'


export const Context = createContext(undefined)

export default function MyContext({children}) {

  const [val, setVal] = useState('default')  

  return (
    <Context.Provider value={[val, setVal]}>
        {children}
    </Context.Provider>  )
}
