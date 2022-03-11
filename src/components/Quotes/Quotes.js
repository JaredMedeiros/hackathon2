import './Quotes.scss';
import React from 'react';

class Quotes extends React.Component{
    constructor(props){
      super(props)
      this.refreshQuote = this.refreshQuote.bind(this);
      this.state = { quote: "", author: "", quotePos: 0 };
    } 
  
  
  refreshQuote() {
    fetch("https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json")
        .then(res => res.json())
        .then(
          (result) => {
            let i = this.state.quotePos;
            let n = Math.floor(Math.random() * (120 - 0 + 1) + 0);
            this.setState({
              quote: result.quotes[n].quote,
              author: result.quotes[n].author
            });
          },
          (error) => {
            this.setState({
              isLoaded: true,
              error
            });
          }
        )
    }
  
  
    render(){
      return(
        <div className = "yes">
        
        <div id="text"> 
        <p>{this.state.quote}</p>
          </div>
              <div id="author">
          <p>{"- " + this.state.author}</p>
          <button id="new-quote" onClick={this.refreshQuote}>New Quote!</button>
          </div>
         
          </div>
      )
    }
  componentDidMount() {
      fetch("https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json")
        .then(res => res.json())
        .then(
          (result) => {
            let n = Math.floor(Math.random() * (120 - 0 + 1) + 0);
            this.setState({
              quote: result.quotes[n].quote,
              author: result.quotes[n].author
            });
          },
          (error) => {
            this.setState({
              isLoaded: true,
              error
            });
          }
        )
    }
  }

  export default Quotes;