import React from 'react'
import { Route } from 'react-router-dom'

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
    }

    render() {

        return(
            <div>
                <form onSubmit={this.submitHandler}>
                    <label>
                        Choose what you want to do:
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

export default SelectTripsOptions 
