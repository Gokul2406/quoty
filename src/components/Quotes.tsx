import React from 'react'
import './styles/Quotes.css'

type QuoteRequest = {
  results: []
}

type Quote = {
  content: "",
  author: ""
}

class Quotes extends React.Component {
  readonly state = {
    dataContent: [],
  }
 async componentDidMount() {
    const url: string = "https://api.quotable.io/quotes"
    const response = await fetch(url)
    const data: QuoteRequest = await response.json();
    this.setState({ dataContent: data.results, loading: false})

 }
  render() {
    const quoteTSX: any[] = [];
    this.state.dataContent.forEach((c: Quote, i: any) => {
      quoteTSX.push(
        <div key={i}>
          <h1 className="quote-content">{c.content}</h1>
          <p>{c.author}</p>
        </div>
      )
    });

    return(
      <div className="quotes">
        {quoteTSX}
      </div>
    )
}

}

export default Quotes
