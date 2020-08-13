import React from "react";

class LoginForm extends React.Component {

  state = { username: "", password: "" };

  changeHandler = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  submitHandler = (e) => {
    e.preventDefault();
    this.props.submitHandler(this.state);
    this.setState({username: "", password: ""});
  };

  render() {
    return (
      <div>
        <h1>Log In</h1>
        <br />
        <form onSubmit={this.submitHandler}>
          <br />
          <input
            type='text'
            name='username'
            placeholder='username'
            value={this.state.username}
            onChange={this.changeHandler}
          />
          <br />
          <input
            type='text'
            name='password'
            placeholder='password'
            value={this.state.password}
            onChange={this.changeHandler}
          />
          <br />
          <br />
          <input type='submit' value='Log In' />
        </form>
      </div>
    );
  }
}
export default LoginForm;
