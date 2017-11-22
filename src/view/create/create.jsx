import React from 'react'
import $ from 'jquery'
// import PropTypes from 'prop-types'

class CreateView extends React.Component {
  constructor(props) {
    super(...arguments)
    this.state = {
    }
  }
  // checkfiled(obj,type,length){
  //   if(typeof obj === 'email'){
  //     console.log('string')
  //   }
  // }
  submitInfo(){
    //email:{ type:’email’,max-length:100,required}
    //name:{ type:’string’,max-length:50,required}

    let  obj = {
      name:this.refs.name.value,
      email:this.refs.email.value,
    }
    let data = JSON.stringify(obj);
    this.postAjax("https://www.mxcins.com/api/users",data,(res)=>{
      let id = res.id;
      window.location = '/detail/'+id
    })
    // this.postAjax("https://www.mxcins.com/api/users",JSON.stringify({'name':"aj",'email':'22343@qq.com'}),(res)=>{
    //   console.log(res)
    // })
  }
  render () {
    return (
      <div>
        <h1>create</h1>
        <div>
        <p><span>name:</span><input type="text" defaultValue="" ref="name" maxLength="100" required/></p>
        <p><span>email:</span><input type="email" defaultValue="" ref="email" maxLength="50" required/></p>
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
