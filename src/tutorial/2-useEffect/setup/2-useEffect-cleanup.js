import React, { useState, useEffect } from 'react'

// cleanup function
// second argument

const UseEffectCleanup = () => {
  const [size, setSize] = useState(window.innerWidth)

  const valuechanger = () => {
    setSize(window.innerWidth)
  }
  // as we render every time the screen changes we got so many event listeners and eventually we got a memory leak  to solve this we have to cleanup prev calls
  useEffect(() => {
    window.addEventListener('resize', valuechanger)
    /* return () => {
      // cleanup function
      window.removeEventListener('resize', valuechanger)
    } */
  }, []) // we can also add [] to solve prob but it will not work for most of the cases
  return (
    <>
      <h1>Window</h1>
      <h2>{size} px</h2>
    </>
  )
}

export default UseEffectCleanup
