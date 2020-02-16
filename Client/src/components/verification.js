import React, { Component } from 'react'
import Axios from 'axios';

class verification extends Component {
    constructor(props) {
        super(props)
        this.state={
            code:null,
            errorMessage:null
        }
   
    }

    


   handleForm=(e)=>{
         e.preventDefault();
       Axios.post('/verification/',this.state.code,{ headers: { token:localStorage.getItem('token'),code:this.state.code } }
       )
       .then(res=>{   try{localStorage.setItem('profile', res.data.user.username)
          window.location='/interest'
         }catch(c){
           this.setState({errorMessage:"Please Enter valid code !"})
        }
      
      }
       )
   }
   onChangecode=(e)=> {
    this.setState({
      code: e.target.value
    })
  }
    render() {
        return (
            <div className="container">
                <div style={{textAlign:"center"}}>
                <p > Enter verification code. </p>
                <form >
       
      <div className="form-group" style={{width:"50%",margin:"0 auto",padding:"30"}}>
        {(this.state.errorMessage)?<div style={{fontSize:"15px"}}class="alert alert-danger" role="alert">
            {this.state.errorMessage}
</div>:""}
      <input 
      value={this.state.code}
      onChange={this.onChangecode}
       type="text" maxLength="5" className="form-control" id="exampleInputPassword1"/>
         </div>
      <button style={{margin:"20px"}} type="submit" onClick={this.handleForm} className="btn btn-primary">Submit</button>
    </form> 
                </div>
               
            </div>
        )
    }
}

export default verification;
