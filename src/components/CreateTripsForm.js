import React from "react";

class CreateTripsForm extends React.Component {
  state = {
    name: "",
    state: "",
    description: "",
    start_date: "",
    end_date: "",
    park_id: "",
    difficulty_rating: 3,
  };

  createTripHandler = async (tripObj) => {
    console.log(this.props.user)
    let auth_token = this.props.user.jwt;
    await fetch("http://localhost:3001/api/v1/trips", {
      method: "POST",
      headers: {
        Authorization: "Bearer " + auth_token,
        accepts: "application/json",
        "content-type": "application/json",
      },
      body: JSON.stringify({ trip: tripObj, trip_lead: this.props.user }),
    })
      .then((resp) => resp.json())
      .then((newTrip) => this.props.stateHandler(newTrip));
  };

  changeHandler = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  submitHandler = (e) => {
    console.log(this.props, this.state);
    e.preventDefault();
    this.createTripHandler(this.state);
  };

  render() {
    return (
      <div className='row'>
        <h2>Create Your Own Trip!</h2>
        <br />
        <form onSubmit={this.submitHandler}>
          <input
            type='text'
            name='name'
            placeholder='Enter a name for your trip!'
            value={this.state.name}
            onChange={this.changeHandler}
          />
          <input
            type='text'
            name='state'
            placeholder='What state will your trip be in?'
            value={this.state.state}
            onChange={this.changeHandler}
          />
          <textarea
            type='text'
            name='description'
            placeholder='Give a description of the activities and sights included in your trip'
            value={this.state.description}
            onChange={this.changeHandler}
          />
          <input
            type='text'
            name='start_date'
            placeholder='What is the start date of your trip?'
            value={this.state.start_date}
            onChange={this.changeHandler}
          />
          <input
            type='text'
            name='end_date'
            placeholder='What is the end date of your trip?'
            value={this.state.end_date}
            onChange={this.changeHandler}
          />
          <input
            type='text'
            name='park_id'
            placeholder='Name of park visited during this trip'
            value={this.state.park_id}
            onChange={this.changeHandler}
          />

          <input type='submit' value='Create this trip!' />
        </form>
      </div>
    );
  }
}
export default CreateTripsForm;
