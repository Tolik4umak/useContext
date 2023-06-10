import React, { useContext } from 'react'
import { Context } from '../MyContext/MyContext'

export function fn(arg) {
    // const [val, setVal] = useContext(Context)
    // setVal(arg)
  }


export function Modal() {
    const [val] = useContext(Context)
    

  return (
    <div>{val}</div>
  )
}
