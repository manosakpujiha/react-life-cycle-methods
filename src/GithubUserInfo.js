import React, { Component } from 'react'
import axios from 'axios'

export default class GithubUserInfo extends Component {
    constructor (props) {
        super(props)
        this.state = {
            imageUrl :'',
            name : '', 
            bio : ''

        }
    }

    async componentDidMount () {
        let api = `https://api.github.com/users/${this.props.username}`
        console.log ('mounted')
        let response =  await axios.get(api)
        console.log(response.data.name)
        this.setState( {name : response.data.name, imageUrl: response.data.avatar_url, bio:  response.data.bio})
    }

  render() {
   
    return (
      <div>
        <h1>{this.state.name}</h1>
        <img src={this.state.imageUrl} alt={this.state.name} />
        <p>{this.state.bio}</p>
      </div>
      
    )
  }
}
