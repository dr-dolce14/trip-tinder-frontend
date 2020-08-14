import React from "react";

class Park extends React.Component {
  render() {
    return (
      <div>
        {console.log(this.props)}
        <h2>{this.props.park.fullName}</h2>
        <p>Website: {this.props.park.url}</p>
        <img alt="" src={this.props.park.images[0] ? this.props.park.images[0].url : "no image"}/>
      </div>
    );
  }
}
export default Park;
