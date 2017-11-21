import React from 'react'
// import PropTypes from 'prop-types'

class HomeView extends React.Component {
  constructor(props) {
    super(...arguments)
    this.state = {

    }
  }

  togoList(){
    window.location= "/list";
  }
  render () {
    return (
      <div>
        <h1>Home</h1>
        <button onClick = {this.togoList.bind(this)}>showList</button>
      </div>
    )
  }
}

export default HomeView
