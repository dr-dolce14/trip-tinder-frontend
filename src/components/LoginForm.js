import React, { useState } from "react";

const LoginForm = (props) => {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")

  const usernameHandler = (e) => setUsername(e.target.value)
  
  const passwordHandler = (e) => setPassword(e.target.value)

  const submitHandler = (e) => {
    e.preventDefault()
    props.submitHandler({username, password})
  }

  return (
    <section className='login form'>
      <div className='row'>

        <h2 id='/login'>
          Log In
        </h2>

        <form
          className='sign-up-form'
          onSubmit={(e) => submitHandler(e)}
        >
          <input
            label='username'
            name='username'
            type='text'
            value={username}
            onChange={usernameHandler}
          />

          <input
            label='password'
            name='password'
            type="password"
            value={password}
            onChange={passwordHandler}
          />

          <div className='title'>
            <input
              type='submit'
              className='btn btn-full'
              value='log in'
            />
          </div>

        </form>
      </div>
    </section>
  );
};
export default LoginForm;