import React from 'react'

class Welcome extends React.Component {

  render() {
    console.log(this.props.users)
    return (
    <div>
      This is home route?
      <p></p>
    </div>
    )
  }
}

export default Welcome