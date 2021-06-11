import React, { useState } from 'react'
// short-circuit evaluation
// ternary operator

const ShortCircuit = () => {
  const [text, setText] = useState('')
  const [error, setError] = useState(false)
  const firstValue = text || 'hello world'
  const secondValue = text && 'hello world'

  return (
    <>
      {/*   <h1>{firstValue}</h1>
      <h1>Value: {secondValue}</h1> */}
      <h1>{text || 'John doe'}</h1>
      <button className='btn' onClick={() => setError(!error)}>
        Clicke here
      </button>
      {text && <h1> hello world</h1>}
      {error && <h1> hello world</h1>}
    </>
  )
}

export default ShortCircuit
