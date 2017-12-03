import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import './index.css';

class App extends React.Component {

  getInitialState() {
    return {
      posts: []
    }
  }

  componentDidMount() {
    var th = this;
    this.serverRequest = 
    axios.get(this.props.source)
      .then(function(result) {    
        th.setState({
        posts: result.data
      });
    })
  }

  componentWillUnmount(){
    this.serverRequest.abort();
  }

  render() {
    console.log('もじ');
  return (
    <div>
      <h1>{this.props.title}</h1>
      <ul>
      </ul>
    </div>
  );
  }
}

  
  

ReactDOM.render(<App source="http://www.atnr.net/wp-json/wp/v2/posts" />, document.getElementById("root"));