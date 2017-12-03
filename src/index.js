import React from 'react'
import ReactDOM from 'react-dom'
import axios from 'axios'
import './index.css'

class App extends React.Component {
  componentDidMount () {
    this.serverRequest =
      axios.get(this.props.source).then(res => {
        if (res && res.data) {
          this.setState({
            posts: res.data,
          })
        }
      })
  }

  componentWillUnmount () {
    this.serverRequest.abort()
  }

  render () {
    const renderContents = () => {
      if (this.state) {
        console.log(this.state.posts[0].id)
        return this.state.posts[0].id
      } else {
        return 'ないっす'
      }
    }

    return (
      <div>
        <h1>{renderContents()}</h1>
        <ul></ul>
      </div>
    )
  }
}

ReactDOM.render(<App source="http://www.atnr.net/wp-json/wp/v2/posts"/>,
  document.getElementById('root'))
