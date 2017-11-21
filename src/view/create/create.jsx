import React from 'react'
import $ from 'jquery'
// import PropTypes from 'prop-types'

class CreateView extends React.Component {
  constructor(props) {
    super(...arguments)
    this.state = {
    }
  }
  submitInfo(){
    let  obj = {
      name:this.refs.name.value,
      email:this.refs.email.value,

    }
    let msg = "name="+obj.name+"&email="+obj.email;
    console.log(msg)
    this.postAjax("https://www.mxcins.com/api/users",(res)=>{
      console.log(res)
    })
  }
  render () {
    return (
      <div>
        <h1>create</h1>
        <div>
        <p><span>name:</span><input type="text" defaultValue="name" ref="name"/></p>
        <p><span>email:</span><input type="text" defaultValue="email" ref="email"/></p>
        <button onClick = {this.submitInfo.bind(this)}>submit</button>
        </div>

      </div>
    )
  }
  postAjax = function(url,data,callback){
         $.ajax({
             url:url,
             type:"post",
             contentType:"application/json",
             dataType:"json",
             data:data,
             timeout:60000,
             success:function(msg){
                 callback(msg);
             },
             error:function(xhr,textstatus,thrown){

             }
         });
     };
}

export default CreateView
