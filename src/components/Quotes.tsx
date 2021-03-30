import React, { Component } from 'react';



class Quotes extends Component {
  constructor(props: any) {
  super(props);
  this.state = {
    loading: false
  }

  }

  async componentDidMount() {
    const url: string = "https://api.quotable.io/random"
    const response = await fetch(url)
    const data = await response.json();
    console.log(data);
  }

  render() {

  return(
    <h1>Hello from Quotes</h1>
  
  )

  }

}

export default Quotes;
