import React, { Component } from 'react'
import Button from '@mui/material/Button';

export default class Classdemo extends Component {
constructor(props){
    super(props);
    this.state={active:false};
}
handleShow = () => {
    this.setState({
        active:true
    });
}
handleHide= () => {
    this.setState({
        active:false
    });
}

  render() {
    if(this.state.active){
    return (
      <div>
      <Button onClick={this.handleHide} variant="contained" size="large" >Hide</Button>
      <h3>Hi ! This is Yakshini</h3>
      </div>
      )}
      else{
        return( 
          <Button onClick={this.handleShow} variant="contained" size="large" >Show</Button>
        )
      }
    }

  }



