import React from 'react'
import ShowDetails from './ShowDetails'

class ShowSelector extends React.Component{

  constructor(props){
    super(props)
    this.state = {
      selectedIndex: 0
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event){
    this.setState({selectedIndex: event.target.value})
    const selectedFilm = this.props.films[event.target.value]
    this.props.setSelectedFilm(selectedFilm)
  }

  render(){

    const options = this.props.films.map( (film, index) => {
      return <option value={index} key={index}> {film.show_title} </option>
    })

    return(
      <select id="films" value={this.state.selectedIndex} onChange={this.handleChange}>
        {options}
      </select>
      )
  }
}

export default ShowSelector