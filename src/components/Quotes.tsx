import React, { Component } from 'react';



type Quote = {
  content: string,
  author: string
}

class Quotes extends Component {
 readonly state = {
    loading: true,
    quoteContent: "",
    quoteAuthor: ""
 } 

  async componentDidMount() {
    const url: string = "https://api.quotable.io/random"
    const response = await fetch(url)
    const data: Quote = await response.json();
    this.setState(
      {loading: false,  quoteContent: data.content, quoteAuthor: data.author})
  }

  render() {

  return(
    <div className="quotes">
    <h1>Hello from Quotes</h1>
      {this.state.loading ? <h1>Loading</h1> : <h1>{this.state.quoteContent} by {this.state.quoteAuthor}</h1>}
    </div>
  )

  }

}

export default Quotes;
