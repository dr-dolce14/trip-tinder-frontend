import React from "react";

class TripPark extends React.Component {
  render() {
    return (
      <div className='park-card'>
        <h2>{this.props.park.name}</h2>

        <div className='park-photo-frame'>
          <div className='park-photo'>
            <img alt='' src={this.props.park.img_url} />
          </div>
        </div>
        <div className='park-description'>
          <h2 className='title'>Park Description</h2>
          <p className='long-copy'>{this.props.park.description}</p>
          <br />
          <br />
          <br />
          <h3 className='title'>Weather Conditions</h3>
          <p className='long-copy'>{this.props.park.weatherInfo}</p>
          <br />
          <br />
          <br />
          <h4 className='title row'>
            <a id='link' href={this.props.park.directionsUrl}>
              Park Directions
            </a>
          </h4>
        </div>
      </div>
    );
  }
}
export default TripPark;
