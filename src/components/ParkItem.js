import React from "react";

class ParkItem extends React.Component {
  render() {
    return (
      <div>
        <h2>{this.props.park.fullName}</h2>
        <h3 className='title'>
          <a id="link" href={this.props.park.url}>Website</a>:
        </h3>
        <figure class='park-photo'>
          <img
            alt=''
            src={
              this.props.park.images[0]
                ? this.props.park.images[0].url
                : "no image"
            }
          />
        </figure>
      </div>
    );
  }
}
export default ParkItem;
