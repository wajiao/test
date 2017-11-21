import React from 'react';
import $ from 'jquery'
// import PropTypes from 'prop-types'

class DetailView extends React.Component {
  constructor(props) {
    super(...arguments)
    this.state = {
    }
  }
  createList(){

  }
  render () {
    console.log(this.props.match.params.id)
    return (
      <div>
        <h1>detail</h1>
      </div>
    )
  }
  componentDidMount(){
    let id = this.props.match.params.id;
    this.putAjax("https://www.mxcins.com/api/users/"+id,'',(res)=>{
      console.log(res)
    });
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
