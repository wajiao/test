import React from 'react'
// import PropTypes from 'prop-types'
import DetailView from '../detail'
class ListView extends React.Component {
  constructor(props) {
    super(...arguments)
    this.state = {
      userList:[]
    }
  }
  gotoDetial(id){
    window.location = "/detail/"+id;
  }
  createList(){
      // <DetailView data = {obj}></DetailView>
    return this.state.userList.map((obj,index) => {
      return (
        <div key = {index}>
          <a onClick = {this.gotoDetial.bind(this,obj.id)}>id:{obj.id}</a>
          <span>name:{obj.name}</span>
          <span>email:{obj.email}</span>
        </div>
      )
    })
  }
  togoCreate(){
    window.location = "/create"
  }
  render () {
    console.log("list");
    return (
      <div>
        <h1>list</h1>

        <button onClick = {this.togoCreate.bind(this)}>create</button>

        {this.createList()}
      </div>
    )
  }

  ajax(url, fn) {
    let xhr = new XMLHttpRequest();
    xhr.onreadystatechange = () => {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          fn(JSON.parse(xhr.responseText))
        }
      }
    }
    xhr.open('GET', url, true);
    xhr.send(null)
  }
  componentDidMount(){
    this.ajax("https://www.mxcins.com/api/users",(res)=>{
      this.setState({userList:res})
    })
  }
}

export default ListView
