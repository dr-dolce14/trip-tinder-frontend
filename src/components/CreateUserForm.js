import React from "react";

class CreateUserForm extends React.Component {
  state = {
    first_name: "",
    last_name: "",
    username: "",
    password: "",
    bio: "",
    avatar: "",
  };

  changeHandler = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  submitHandler = (e) => {
    e.preventDefault();
    this.props.submitHandler(this.state);
    this.setState({
      first_name: "",
      last_name: "",
      username: "",
      password: "",
      bio: "",
      avatar: "",
    });
  };

  render() {
    return (
      <div>
        <h1>Sign up Here</h1>
        <br />
        <form onSubmit={this.submitHandler}>
          <input
            type='text'
            name='first_name'
            placeholder='enter your first name'
            value={this.state.first_name}
            onChange={this.changeHandler}
          />
          <br />
          <input
            type='text'
            name='last_name'
            placeholder='enter your last name'
            value={this.state.last_name}
            onChange={this.changeHandler}
          />
          <br />
          <input
            type='text'
            name='username'
            placeholder='enter a user name'
            value={this.state.username}
            onChange={this.changeHandler}
          />
          <br />
          <input
            type='text'
            name='password'
            placeholder='enter a password'
            value={this.state.password}
            onChange={this.changeHandler}
          />
          <br />
          <input
            type='text'
            name='bio'
            placeholder='briefly describe yourself'
            value={this.state.bio}
            onChange={this.changeHandler}
          />
          <br />
          <input
            type='text'
            name='avatar'
            placeholder='url for avatar image'
            value={this.state.avatar}
            onChange={this.changeHandler}
          />
          <br />
          <input type='submit' value='Create your User Profile!' />
        </form>
      </div>
    );
  }
}
export default CreateUserForm;
