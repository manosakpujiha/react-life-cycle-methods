import React, { Component } from 'react'
// import axios from 'axios'

export default class Timer extends Component {
    constructor (props) {
        super(props)
        this.state = {
            quote : 'default quote',
            time: new Date(),
        }
        console.log('in constructor')

        // this.manos = this.manos.bind(this)
    }
    // manos(){
    //     console.log('hi')
    //     if (false) {
    //         return (
    //             <div className="loader">
    //                 <span>hi</span>
    //                 <span></span>
    //                 <span></span>
    //                 <span></span>
    //                 <span></span>
    //                 <span></span>
    //                 <span></span>
    //                 <span></span>
    //                 <span></span>
    //                 <span></span>
    //                 <span></span>
    //                 <span></span>
    //                 <span></span>
    //                 <span></span>
    //                 <span></span>
    //             </div>
    //         )
    //     } else {
    //         return 'hey'
    //     }
    // }

    componentDidMount() {
      console.log('in mounted')
      // axios.get(
      //   'https://icanhazdadjoke.com/', 
      //   { headers: { Accept: 'application/json' } }
      // )
      // .then((response) => {
      //   console.log(response.data.joke);
      //   setTimeout(() => {
      //     this.setState({quote: response.data.joke })
      //   }, 3000);
      // });
      this.timerId = setInterval(() => {
        this.setState({time: new Date()})
      }, 1000)
    }
  render(){
    // console.log('rendered', this.state.time.getSeconds())
    return (
      <h1>
        {this.state.quote} <br></br>
        {this.state.time.getSeconds()}
    </h1>
    )
  }
}
