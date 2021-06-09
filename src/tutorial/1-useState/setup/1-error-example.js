import React from 'react'

const ErrorExample = () => {
  // here we change the value of title but it can't be reflected in our html.. so to solve this usecase kicks in...
  let title = 'random title'
  const ClickHandler = () => {
    title = 'hello people'
  }
  return (
    <React.Fragment>
      <h1>Use State example</h1>
      <button type='button' onClick={ClickHandler} className='btn'>
        {' '}
        click me
      </button>
    </React.Fragment>
  )
}

export default ErrorExample
