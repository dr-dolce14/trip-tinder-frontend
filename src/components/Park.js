import React from 'react'

class Park extends React.Component {
    render () {
        return (
            <div>
                <h2>{this.props.park.image}</h2>
            </div>

        )
    }

}
export default Park