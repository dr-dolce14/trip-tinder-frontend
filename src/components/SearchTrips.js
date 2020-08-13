import React from 'react'

class SearchTrips extends React.Component {

    state= {
        selectedOption: ""
    }

   handleOptionChange = (e) => {
       this.setState({
           selectedOption: e.target.value
       })
   }

    render () {
        return (
            <div>
                Search for Trips by:
                <br />
                <form>
                    <label>
                        <input type='radio' value='state' checked={this.state.selectedOption === 'state'} onChange={this.handleOptionChange}/>
                        State
                    </label>
                    <label>
                    <input type='radio' value='difficulty' checked={this.state.selectedOption === 'difficulty'} onChange={this.handleOptionChange}/>
                        Difficulty rating
                    </label>
                    <label>
                    <input type='radio' value='park' checked={this.state.selectedOption === 'park'} onChange={this.handleOptionChange}/>
                        Park
                    </label>
                    <label>
                    <input type='radio' value='startdate' checked={this.state.selectedOption === 'startdate'} onChange={this.handleOptionChange}/>
                        Start Date
                    </label>
                    
                
                </form>

            </div>
         
        )
    }
}
export default SearchTrips