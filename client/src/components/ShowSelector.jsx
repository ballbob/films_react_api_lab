import React from 'react'

class ShowSelector extends React.Component{

  constructor(props){
    super(props)
    this.state = {
      selectedIndex: 0
    }
  }

  render(){

    const options = this.props.films.map( (film, index) => {
      return <option value={index} key={index}> {film.show_title} </option>
    })

    return(
      <select id="films" value={this.state.selectedIndex}>
        {options}
      </select>
      )
  }
}

export default ShowSelector