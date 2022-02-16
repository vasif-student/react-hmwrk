import React, { Component } from 'react'

class Event extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "No data found",
            status: "Online",
            branch: "None"
        }
    }

    StatusHandler = (e) => {
        this.setState({
            status: this.state.status === "Online" ? "Offline" : "Online"
        })
    }

    OptionHandler = (e) => {
        this.setState({
            branch: e.target.value
        })
    }

    NameHandler = (e) => {
        this.setState({
            name: e.target.value
        })
    }

  render() {
    const {name, status,branch} = this.state; 
    return (
      <div>
          <h1>FirstName: {name}</h1>
          <h1>Branch: {branch}</h1>
          <h1 style={status==="Online" ? {color: "green"} : {color: "red"}}>{status}</h1>
          <input onChange={this.NameHandler} type="text"></input>
          <br/>
          <select onChange = {this.OptionHandler}>
              <option>Front-End Developer</option>
              <option>Back-End Developer</option>
          </select>
          <button style={{padding: "10px 50px", borderRadius: "5px", border: "1px solid #000", cursor: "pointer"}} onClick={this.StatusHandler}>{status}</button>
          <br />
          <br />
          <hr />
      </div>
    )
  }
}

export default Event