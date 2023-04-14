import React, { Component } from 'react'
import './ZenQuotes.css'
import axios from 'axios';

export default class ZenQuotes extends Component {
    constructor(props) {
        super(props)
        this.state = { quote: 'Zen quotes', isLoaded: false}
        // this.propUpd = this.propUpd.bind(this)
    }
    componentDidMount() {
       axios.get(
        'https://icanhazdadjoke.com/', 
        { headers: { Accept: 'application/json' } }
      )
      .then((response) => {
        console.log(response.data.joke);
        setTimeout(() => {
          this.setState((state) =>  { return {quote: response.data.joke, isLoaded : !state.isLoaded }})
        }, 5000);
      });
    }
   
    
  render() {

    return (
        <div>
          
            { !this.state.isLoaded ? (<div className='loader'></div>) : (<div > {this.state.quote}</div>) }
        </div>
    );
    
  }
}
