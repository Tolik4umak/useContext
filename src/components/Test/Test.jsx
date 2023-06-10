import React, { useContext } from 'react'
import { Modal, fn } from '../Modal/Modal'

export default function Test() {
    

  return (
    <div>
        <button onClick={() => fn('my value')}>Test</button>
        <Modal/>

        <br />
        <br />
    </div>
  )
}
