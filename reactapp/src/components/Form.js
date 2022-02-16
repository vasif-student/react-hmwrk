import React, { Component } from 'react'

export default class NameForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {value: ''};
  
      this.handleChange = this.handleChange.bind(this);
      this.nameSubmitHandler = this.nameSubmitHandler.bind(this);
      this.surNameSubmitHandler = this.surNameSubmitHandler.bind(this);
    }
  
    handleChange(event) {
      this.setState({value: event.target.value});
    }
  
    nameSubmitHandler(event) {
      alert('A name was submitted: ' + this.state.value);
      event.preventDefault();
    }
    surNameSubmitHandler(event) {
        alert('A surname was submitted: ' + this.state.value);
        event.preventDefault();
    }

      OptionHandler = (e) => {
        this.setState({
            branch: e.target.value
       })
    }
  
    render() {
      return (
        <form onSubmit={this.handleSubmit}>
            <h1>Form</h1>
          <label>
            Name:
            <input style={{margin: "10px"}} type="text" value={this.state.value} onChange={this.nameSubmitHandler} />
          </label>
          <input type="submit" value="Submit" />
          <label><br/>
          <br/>
            Surname:
            <input type="text" value={this.state.value} onChange={this.surNameSubmitHandler} />
          </label>
          <input style={{margin: "10px"}} type="submit" value="Submit" />
          <br />
          <br />
          City
          <select onChange = {this.OptionHandler}>
              <option></option>
              <option>Baku</option>
              <option>Ganja</option>
              <option selected>Shusha</option>
          </select>
          <br />
          <br />
          Age:
          <input type="number"></input>
          <br />
          <br />
          <button style={{backgroundColor: "green"}} type="submit">Submit</button>
        </form>
      );
    }
  }
