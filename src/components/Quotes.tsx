import React, { Component } from 'react';

type Quote = {
  content: string,
  author: string
}

class Quotes extends Component {
  constructor(props: any) {
  super(props);
  this.state = {
    loading: false,
    quoteContent: "",
    quoteAuthor: ""
  }

  }

  async componentDidMount() {
    const url: string = "https://api.quotable.io/random"
    const response = await fetch(url)
    const data: Quote = await response.json();
    this.setState(
  {quoteContent: data.content, quoteAuthor: data.author})
  console.log(this.state)
  }

  render() {

  return(
    <div className="quotes">
    <h1>Hello from Quotes</h1>
      </div>
  )

  }

}

export default Quotes;
