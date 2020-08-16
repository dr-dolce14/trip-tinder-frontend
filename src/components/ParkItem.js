import React from "react";

class ParkItem extends React.Component {
  render() {
    return (
      <div>
        <h2>{this.props.park.fullName}</h2>
        <p>Website: {this.props.park.url}</p>
        <img alt="" src={this.props.park.images[0] ? this.props.park.images[0].url : "no image"}/>
      </div>
    );
  }
}
export default ParkItem;
