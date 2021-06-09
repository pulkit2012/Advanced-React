import React, { useState } from 'react'

const UseStateCounter = () => {
  const [text, setText] = useState(0)
  const resetter = () => {
    setText(0)
  }
  const Incrementor = () => {
    setTimeout(() => {
      setText((prevVal) => {
        return prevVal + 1
      })
    }, 2000)
  }
  return (
    <>
      <section style={{ margin: '4rem 0' }}>
        <h2>Regular Counter</h2>
        <h1>{text}</h1>
        <button
          className='btn'
          onClick={() => {
            setText(text - 1)
          }}
        >
          decrease
        </button>
        <button className='btn' onClick={resetter}>
          Reset
        </button>
        <button
          className='btn'
          onClick={() => {
            setText(text + 1)
          }}
        >
          Increase
        </button>
      </section>
      <section style={{ margin: '4rem 0' }}>
        <h2>Regular Counter</h2>
        <h1>{text}</h1>
        <button className='btn' onClick={Incrementor}>
          Increase
        </button>
      </section>
    </>
  )
}

export default UseStateCounter
