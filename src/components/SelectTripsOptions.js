import React from 'react'
import { withRouter } from 'react-router-dom'

class SelectTripsOptions extends React.Component {
  state = {
    value: ""
  };

  changeHandler = (e) => {
    this.setState({
      value: e.target.value,
    });
  };

  submitHandler = (e) => {
    e.preventDefault();

    let path;
    if (this.state.value === "createTrip") {
      path = "/trips-create";
    } else if (this.state.value === "searchTrips") {
      path = "/trips-search";
    } else if (this.state.value === "seeTrips") {
      path = "/trips";
    }
    this.props.history.push(path);
  };

  render() {
    console.log(this.props.user);
    return (
      <section classNAme='row'>
        <div className='landing form'>
          <form className='title' onSubmit={this.submitHandler}>
            <label>
              <h2 className='title'>Select Trips</h2>
              <select value={this.state.value} onChange={this.changeHandler}>
                <option value='' disabled selected hidden></option>
                <option value='searchTrips'>Search Trips</option>
                <option value='createTrip'>Create a Trip</option>
                <option value='seeTrips'>See all Trips</option>
              </select>
            </label>
            <input className='btn btn-full' type='submit' value='Submit' />
          </form>
        </div>
      </section>
    );
  }
}

export default withRouter(SelectTripsOptions) 
