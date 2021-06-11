import React, { useState, useReducer } from 'react'
import Modal from './Modal'
import { data } from '../../../data'
// reducer function

const Index = () => {
  const [name, setName] = useState('')
  const [people, setPeople] = useState(data)
  const [modal, setModal] = useState(false)
  const handleSubmit = (e) => {
    e.preventDefault()
    if (name) {
      setModal(true)
      setPeople([
        ...people,
        { id: new Date().getTime().toString(), name: name },
      ])
      setName('')
    } else {
      setModal(true)
    }
  }
  return (
    <>
      {modal && <Modal />}
      <form className='form' onSubmit={handleSubmit}>
        <div>
          <input
            type='text'
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <button type='submit'> add people</button>
      </form>
      {people.map((person) => {
        return (
          <div key={person.id}>
            <h4>{person.name}</h4>
          </div>
        )
      })}
    </>
  )
}

export default Index
