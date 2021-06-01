import React from 'react'
import axios from 'axios'

class App extends React.Component {
  state = {
    users: {},
    followers: []
  }

  componentDidMount() {
    axios.get('https://api.github.com/users/RasmussenBen')
      .then((res) => {
        this.setState({...this.state, users: res.data})
      })
      .catch(err => {
        console.log(err)
      })

    axios.get('https://api.github.com/users/RasmussenBen/followers')
      .then((res) => {
        this.setState({...this.state, followers: res.data})
      })
      .catch(err => {
        console.log(err)
      })
  }

  render () {
    return (
      <div>
        <h1>My Github Profile</h1>
      </div>
      )
  }
}



export default App