// Basic Forms
// http://localhost:3000/isolated/exercise/06.js

import * as React from 'react'

function UsernameForm({onSubmitUsername}) {
  const [username, setUserName] = React.useState('')
  const [errorMessage, setErrorMessage] = React.useState(null)
  const userName = React.useRef(null)
  function handleSubmitForm(event) {
    event.preventDefault()
    // onSubmitUsername('Hi ' + ' ' + event.target.elements.usernameInput.value)
    // onSubmitUsername(userName.current.value)
    onSubmitUsername(username)
  }

  function handleInputChange(event) {
    const {value} = event.target
    const isLowerCase = value === value.toLowerCase()
    isLowerCase
      ? setErrorMessage(null)
      : setErrorMessage('Only lowercase letters are allowed')

    setUserName(value.toLowerCase())
  }

  return (
    <form
      onSubmit={e => {
        handleSubmitForm(e)
      }}
    >
      <div>
        <label htmlFor="usernameInput">Username:</label>
        <input
          onChange={handleInputChange}
          ref={userName}
          value={username}
          id="usernameInput"
          type="text"
        />
      </div>
      {/* <div style={{color: 'red'}}>{errorMessage}</div> */}
      <button type="submit">Submit</button>
    </form>
  )
}

function App() {
  const onSubmitUsername = username => alert(`You entered: ${username}`)
  return <UsernameForm onSubmitUsername={onSubmitUsername} />
}

export default App
