import React from 'react'
import { Route, withRouter } from 'react-router-dom'
import TripItem from './TripItem'

class SelectTripsOptions extends React.Component {
    state = {
        value: ""
    }

    changeHandler = (e) => {
        this.setState({
            value: e.target.value
        })
    }

    submitHandler = (e) => {
        alert("You chose: " + this.state.value)
        e.preventDefault()
        if (this.state.value === 'createTrip') {
            this.props.history.push('/trips-create')
        } else if (this.state.value === 'searchTrips') {
            this.props.history.push('/trips-search')
        } else if (this.state.value === 'seeTrips') {
            this.props.history.push('/trips')
        }
        
    }

    render() {
        return(
            <div className="landing form">
                <form className="title" onSubmit={this.submitHandler}>
                    <label>
                        Select
                        <select value={this.state.value} onChange={this.changeHandler}>
                            <option value="searchTrips">Search Trips</option>
                            <option value="createTrip">Create a Trip</option>
                            <option value="seeTrips">See all Trips</option>
                        </select>
                    </label>
                    <input type="submit" value="Submit" />
                </form>
            </div>
        )
    }
}

export default withRouter(SelectTripsOptions) 
