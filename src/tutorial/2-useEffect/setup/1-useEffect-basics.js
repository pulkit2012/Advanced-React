import React, { useState, useEffect } from 'react'
// by default runs after every re-render
// cleanup function
// second parameter

const UseEffectBasics = () => {
  const [value, setValue] = useState(0)
  //this useEffect will run after every re-render but cuz of condition it will run after 0
  useEffect(() => {
    if (value > 0) {
      document.title = `new Message ${value}`
    }
  }, []) // by adding [] we specified yhat it will run only on initial render
  useEffect(() => {
    console.log('I dont know')
  }, [value]) // by adding [value] we specified it will run only after value is changed render
  useEffect(() => {
    console.log('Hey')
  })
  return (
    <>
      <h1>{value}</h1>
      <button
        className='btn'
        onClick={() => {
          setValue(value + 1)
        }}
      >
        Clicke here
      </button>
    </>
  )
}

export default UseEffectBasics
