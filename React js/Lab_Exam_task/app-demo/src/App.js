import React from 'react'
//import PropTypes from 'prop-types'

class App extends React.Component
{
  constructor(props)
  {
    super(props)
    this.state = {person:"",yes:true}
  }
  handle(event)
  {
    
    this.setState({person:event.target.value})
    console.log(this.state.person)
  }
  render(){
    
      if (this.state.yes===true)
      {
        return(
        <div>
       <input type='text' id="data" onChange={this.handle}/>
          </div>
)
      }  
      
  }
}


export default App

