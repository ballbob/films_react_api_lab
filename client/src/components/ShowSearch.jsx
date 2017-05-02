import React from 'react'

class ShowSearch extends React.Component{

  constructor(props){
    super(props)
    this.state = {actor: ""}
    this.handleTextChange = this.handleTextChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleTextChange(event){
    this.setState({ actor: event.target.value })
  }

  handleSubmit(event){
    event.preventDefault()
    const actor = this.state.actor.trim()

    if(!actor){
      return
    }

    this.props.handleSubmit(actor)
    this.setState({actor: ""})
  }

  render(){
    return(
      <div id="search-box">
        <form onSubmit={this.handleSubmit}>
          <input 
          type="text"
          placeholder="Choose an actor"
          value={this.state.actor}
          onChange={this.handleTextChange}/>
          <button type="submit">Search</button>
        </form>
      </div>
    )
  }
}

export default ShowSearch