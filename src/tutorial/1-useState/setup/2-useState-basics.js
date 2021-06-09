import React, { useState } from 'react' //it is a named fun so we must have to use curly braces

const UseStateBasics = () => {
  const [text, setText] = useState('random title')
  const clickHandler = () => {
    if (text === 'random title') {
      setText('Hello World')
    } else {
      setText('random title')
    }
  }
  return (
    <React.Fragment>
      <h1>{text}</h1>
      <button className='btn' onClick={clickHandler}>
        Change title
      </button>
    </React.Fragment>
  )
}

export default UseStateBasics
