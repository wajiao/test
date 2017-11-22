import React from 'react';
import $ from 'jquery'
// import PropTypes from 'prop-types'

class DetailView extends React.Component {
  constructor(props) {
    super(...arguments)
    this.state = {
      obj:{
        'id':1,'name':"aj",'email':"123@.com"
      },
      watch:"off",
      style:{"display":"none"}
    }
  }
  createList(){
    let obj = this.state.obj;
    console.log(obj)

    return (
        <div style = {this.state.style}>
        <div>id:{obj.id}</div>
        <div>name:{obj.name}</div>
        <div>email:{obj.email}</div>
        </div>
      )
  }
  showChild(){
    let style = this.state.style;
    if(this.state.watch==="off"){
      style = {"display":"none"};
      this.setState({watch:"on",style:style})
    }else if(this.state.watch==="on") {
      style = {"display":"block"};
      this.setState({watch:"off",style:style})
    }
  }
  render () {
    return (
      <div>
        <button onClick = {this.showChild.bind(this)}>detail</button>
        {this.createList()}
      </div>
    )
  }
  componentDidMount(){
    if(this.props.data=='undefind'){
      this.setState({obj:{'id':1,'name':"aj",'email':"123@.com"}})
    }

    // let id = this.props.match.params.id;
    // this.putAjax("https://www.mxcins.com/api/users/"+id,JSON.stringify({'name':"",'email':''}),(res)=>{
    //   console.log(res)
    // });
  }
  putAjax(url,data,callback) {
    $.ajax({
           url:url,
           type:"put",
           contentType:"application/json",
           dataType:"json",
           data:data,
           timeout:20000,
           success:function(msg){
               callback(msg);
           },
           error:function(xhr,textstatus,thrown){
           }
       });


  }

}

export default DetailView
