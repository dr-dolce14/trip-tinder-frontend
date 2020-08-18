import React from "react";

class ParkItem extends React.Component {
 addParkHandler = () => {
   console.log(this.props.park)
    const parkObj = {
      name: this.props.park.fullName,
      state: this.props.park.states,
      rating: null,
      park_code: this.props.park.parkCode,
      description: this.props.park.description,
      weatherInfo: this.props.park.weatherInfo,
      img_url: this.props.park.images[0].url,
      directionsUrl: this.props.park.directionsUrl
    }
    console.log(parkObj)
    this.addParkFetch(parkObj)
  }

  addParkFetch = async (parkObj) => {
    await fetch('http://localhost:3001/api/v1/parks', {
      method: 'POST',
      headers: {
        "accepts": 'application/json',
        "content-type": 'application/json'
      },
      body: JSON.stringify(parkObj)
    })
    .then(resp=> resp.json())
    .then(data => console.log(data))
    console.log(this.props.park)
  }
  render() {
    //on hover would like to display park stats, save park
    return (
      <div className='park-card' onClick={() => this.addParkHandler()}>
        <h2>{this.props.park.fullName}</h2>
        <h3 className='title'>
          <a id='link' href={this.props.park.url}>
            Website
          </a>
          :
        </h3>
        <div class="park-photo-frame">
          <div class='park-photo'>
            <img
              alt=''
              src={
                this.props.park.images[0]
                  ? this.props.park.images[0].url
                  : "no image"
              }
            />
          </div>
        </div>
      </div>
    );
  }
}
export default ParkItem;
