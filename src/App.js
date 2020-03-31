import React from "react";
import "./App.css"

class App extends React.Component {

  constructor() {
    super()

    this.state = {
      loading: true,
      person: null
    };
  }


  componentDidMount() {
    fetch("https://randomuser.me/api/")
      .then(response => response.json())
      .then(data => {
        this.setState({
          person: data.results[0],
          loading: false
        })
      })
  }
  myClick = () => {
    fetch("https://randomuser.me/api/")
      .then(response => response.json())
      .then(data => {
        this.setState({
          person: data.results[0],
          loading: false
        })
      })
  }

  render() {
    if (!this.state.loading) {
      return (
        <div style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column"
        }} className="container">
          <h2 className="ribbon"><strong className="ribbon-content">This is my random person generator</strong></h2>
          <div className="card, paper" style={{ width: "18rem", height: "27rem" }}>
            <img className="card-img-top" src={this.state.person.picture.large} />
            <div className="card-body">
              <h6 className="card-text"><strong>Name:</strong> {this.state.person.name.title} {this.state.person.name.first} {this.state.person.name.last}</h6>
              <h6 className="card-text"><strong>Age:</strong> {this.state.person.dob.age}</h6>
              <h6 className="card-text"><strong>Email:</strong> {this.state.person.email}</h6>
              <h6 className="card-text"><strong>City:</strong> {this.state.person.location.city}</h6>
            </div>
          </div>
          <button onClick={this.myClick}>Give Me New Random Person</button>
          <h1>Created By Abhinav Bhatt</h1>

        </div>
      );
    } else {
      return (
        <div><h3 style={{ color: "red" }}>Loading......</h3></div>
      )
    }
  }
}

export default App