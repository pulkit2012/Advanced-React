import React, { useState } from 'react'

const UseStateObject = () => {
  const [person, setPerson] = useState({
    name: 'pulkit',
    id: '1',
    message: 'hello people',
  })
  //or
  const [name, setName] = useState('pulkit')
  const [id, setId] = useState('1')
  const [message, setMessage] = useState('Hello People')
  const changeMessage = () => {
    /* if (person.message === 'hello people') {
      setPerson({ ...person, message: 'Hi pulkit' })
    } else {
      setPerson({ ...person, message: 'hello people' })
    } */
    setMessage('Hi Pulkit')
  }
  return (
    <>
      {/*  <h3>{person.name}</h3>
      <h3>{person.id}</h3>
      <h3>{person.message}</h3> */}
      <h3>{name}</h3>
      <h3>{id}</h3>
      <h3>{message}</h3>
      <button className='btn' onClick={changeMessage}>
        Change Message
      </button>
    </>
  )
}

export default UseStateObject
