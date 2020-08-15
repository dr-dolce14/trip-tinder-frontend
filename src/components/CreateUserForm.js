import React from "react";
import "../resources/css/Form.css";

class CreateUserForm extends React.Component {
  state = {
    first_name: "",
    last_name: "",
    username: "",
    password: "",
    bio: "",
    avatar: "",
    errors: {
        first_name: "",
        last_name: "",
        username: ""
    }
  };

  validateForm = (errors) => {
      let valid = true
      Object.values(errors).forEach(
          (val) => val.length > 0 && (valid = false)
      )
      return valid
  }

  changeHandler = (e) => {
      const { name, value } = e.target
      let errors = this.state.errors
      
      switch (name) {
          case 'first_name':
              errors.first_name =
              value.length < 4
              ? 'First Name must be at least 4 characters long!'
              : '';
              break;
          case 'last_name':
              errors.last_name =
              value.length < 4
              ? 'Last Name must be at least 4 characters long!'
              : '';
              break;
         case 'username':
             errors.username =
             value.length < 6
             ? 'Username must be a least 6 characters long!'
             : '';
             break;
             default:
                 break;

      }

    this.setState({ errors, [name]: value})
  };

  submitHandler = (e) => {
    e.preventDefault();
    if(this.validateForm(this.state.errors)) {
        console.info('Valid Form')
    } else {
        console.error('Invalid Form')
    }
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
      <section>
        <div className="row">
          <h2>Sign up Here</h2>
        </div>
        <div className="row">
          <form onSubmit={this.submitHandler} className="sign-up-form">
            <div className="row">
            <div className="col span-1-of-3">
                <label for="first_name">First Name</label>
            </div>

            <div className="col span-2-of-3">
              <input
                type='text'
                name='first_name'
                placeholder='enter your first name'
                value={this.state.first_name}
                onChange={this.changeHandler} noValidate
              />
              {(this.state.errors.first_name.length > 0) && 
              (<span>{this.state.errors.first_name}</span>)}
            </div>
          </div>

            <div className="row">
            <div className="col span-1-of-3">
              <label for="last_name">Last Name</label>
          </div>

          <div className="col span-2-of-3">
            <input
              type='text'
              name='last_name'
              placeholder='enter your last name'
              value={this.state.last_name}
              onChange={this.changeHandler} noValidate
            />
            {(this.state.errors.last_name.length > 0 )&&
            (<span>{this.state.errors.last_name}</span>)}
            </div>
            </div>
              <div className="row">
            <div className="col span-1-of-3">
              <label for="username">Username</label>
          </div>

          <div className="col span-2-of-3">
            <input
              type='text'
              name='username'
              placeholder='enter a user name'
              value={this.state.username}
              onChange={this.changeHandler} noValidate
            />
             {(this.state.errors.username.length > 0 )&&
            (<span>{this.state.errors.username}</span>)}
            </div>
            </div>

            <div className="row">
            <div className="col span-1-of-3">
              <label for="password">Password</label>
          </div>

          <div className="col span-2-of-3">
            <input
              type='password'
              name='password'
              placeholder='enter a password'
              value={this.state.password}
              onChange={this.changeHandler}
            />
            </div>
          </div>

            <div className="row">
            <div className="col span-1-of-3">
              <label for="bio">Tell Us About Yourself</label>
          </div>

          <div className="col span-2-of-3">
            <textarea
              type='text'
              name='bio'
              placeholder='briefly describe yourself'
              value={this.state.bio}
              onChange={this.changeHandler}
            />
            </div>
              </div>

              <div className="row">
            <div className="col span-1-of-3">
              <label for="avatar">Upload an image</label>
          </div>

          <div className="col span-2-of-3">
            <input
              type='text'
              name='avatar'
              placeholder='url for avatar image'
              value={this.state.avatar}
              onChange={this.changeHandler}
            />
            </div>
            </div>
             <div className="row">
                <div className="col span-1-of-3">
                    <label>&nbsp;</label>
                </div>
            <div className="col span-2-of-3">
            <input className="button" type='submit'    value='Create your User Profile!' />
            </div>
          </div>
          </form>
        </div>
      </section>
    );
  }
}
export default CreateUserForm;