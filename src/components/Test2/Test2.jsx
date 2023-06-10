import React, { useContext } from 'react'
import { Modal } from '../Modal/Modal'
import { Context } from '../MyContext/MyContext'

export default function Test2() {

  const [_, setVal] = useContext(Context)
    
  return (
    <div>
        <button onClick={() => setVal('my new value')}>Test 2</button>
        <Modal/>
    </div>
  )
}
