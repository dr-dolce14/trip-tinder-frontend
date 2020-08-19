import React from "react";

const range = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
class CreateTripsForm extends React.Component {
  state = {
    name: "",
    state: "",
    description: "",
    start_date: "",
    end_date: "",
    park_id: "",
    difficulty_rating: '',
    parks: [],
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
      //how to reroute to /trips?
      .then((newTrip) => this.props.stateHandler(newTrip));
  };

  changeHandler = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    })
    console.log(e.target.value);
  };

  submitHandler = (e) => {
    console.log(this.props, this.state);
    e.preventDefault();
    const newTrip = {
      name: this.state.name,
      state: this.state.state,
      description: this.state.description,
      start_date: this.state.start_date,
      end_date: this.state.end_date,
      park_id: this.state.park_id,
      difficulty_rating: this.state.difficulty_rating,
    }
    console.log(newTrip)
    this.createTripHandler(this.state);
  };


  componentDidMount() {
    let initialParks = []
    fetch("http://localhost:3001/api/v1/parks")
    .then(resp => resp.json())
    .then(data => {
      initialParks = data.map(park => {
        return park
      })
      this.setState({
        parks: initialParks
      })
    })
  }

  render() {
    return (
      <section className='form landing'>
        <div className='row box'>
          <h2>Create Your Own Trip!</h2>
          <div className='row'>
            <form onSubmit={this.submitHandler}>
              <div className='row'>
                <input
                  type='text'
                  name='name'
                  placeholder='Enter a name for your trip!'
                  value={this.state.name}
                  onChange={this.changeHandler}
                />
              </div>
              <div className='row'>
                <input
                  type='text'
                  name='state'
                  placeholder='What state will your trip be in?'
                  value={this.state.state}
                  onChange={this.changeHandler}
                />
              </div>
              <div className='row'>
                <textarea
                  type='text'
                  name='description'
                  placeholder='Give a description of the activities and sights included in your trip'
                  value={this.state.description}
                  onChange={this.changeHandler}
                />
              </div>
              <div className='row'>
                <input
                  type='text'
                  name='start_date'
                  placeholder='What is the start date of your trip?'
                  value={this.state.start_date}
                  onChange={this.changeHandler}
                />
              </div>
              <div className='row'>
                <input
                  type='text'
                  name='end_date'
                  placeholder='What is the end date of your trip?'
                  value={this.state.end_date}
                  onChange={this.changeHandler}
                />
              </div>

              <div className='row'>
                <select
                  name='park_id'
                  onChange={(e) =>
                    this.setState(
                      {
                        park_id: e.target.value,
                      },
                      console.log(e.target.value)
                    )
                  }
                >
                  <option value='' disabled selected hidden>
                    Choose a Park
                  </option>
                  {this.state.parks.map((park) => {
                    return (
                      <option key={park.id} value={park.id}>
                        {park.name}
                      </option>
                    );
                  })}
                </select>
              </div>

              <div className='row'>
                <select
                  name='difficulty_rating'
                  onChange={(e) => this.changeHandler(e)}
                >
                  <option value='' disabled selected hidden>
                    Difficulty Rating
                  </option>
                  {range.map((rating) => {
                    return (
                      <option key={rating} value={rating}>
                        {rating}
                      </option>
                    );
                  })}
                </select>
              </div>

             <div className='title'> <input className='button' type='submit' value='Create this trip!' /></div>
            </form>
          </div>
        </div>
      </section>
    );
  }
}
export default CreateTripsForm;

