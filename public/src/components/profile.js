import React from 'react';
import { Redirect } from 'react-router';
import axios from 'axios';

const username=localStorage.getItem('username')

export default class Profile extends React.Component {
  constructor(props) {
    super(props)
    this.state={
      destinations: []
    }
  }

  getUserDestinations() {
    var username = localStorage.username
    var self = this
    axios.post('/userData', JSON.stringify({username: username}))
    .then(function(response) {
        self.renderUserDestinations(response.data.destinations)
    })
    .catch(function(err) {
      console.log("desterr", err)
    })
  }

  renderUserDestinations(destinations) {
    console.log(destinations)
    this.setState({destinations: destinations})
  }

	render() {
    if (!localStorage.getItem('reload')) {
      localStorage.setItem('reload', true)
      window.location.reload()
    }
		return (
      <div className = "profile">
  			<div className = "content1">
          <h1>Passport</h1>
          <div className = "fontawesome"><i className="fa fa-user-circle-o"></i></div>
          <p>Name: {username}</p>
          <p>Location: Earth</p>
        </div>
        <div className = "content2">
          <h1>Saved Destinations </h1>
          {this.getUserDestinations()}
          <p>{this.state.destinations}</p>
        </div>
      </div>
		);
	}
}
