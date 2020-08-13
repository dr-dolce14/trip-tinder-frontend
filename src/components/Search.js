import React from "react";

class Search extends React.Component {
  state = { searchTerm: "" }

changeHandler = (e) => {
  this.setState({
    searchTerm: e.target.value
  })
}

submitHandler = (e) => {
  e.preventDefault()
  this.props.searchTripsSubmitHandler(this.state.searchTerm)
  this.setSTate ({
    searchTerm: ""
  })
}


  
  render() {
    return (
    <div>
      Search for Trips!
      <br />
      <form onSubmit={this.submitHandler}>
        <input type="text" value={this.state.searchTerm} onChange={this.changeHandler} />
        <input type="submit" value="search" />
      </form>
    </div>)
  }
}

export default Search;
