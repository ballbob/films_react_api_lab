import React from 'react'
import ShowSelector from '../components/ShowSelector'
import ShowDetails from '../components/ShowDetails'

class ShowContainer extends React.Component{

  constructor(props){
    super(props)
    this.state = {
      films: [],
      selectedFilm: null
    }
  }

  componentDidMount(){
    const url = "http://netflixroulette.net/api/api.php?actor=Nicolas%20Cage"
    const request = new XMLHttpRequest()
    request.open("GET", url)

    request.onload = () => {
      if(request.status === 200){
        const jsonString = request.responseText
        const films = JSON.parse(jsonString)
        this.setState( {films: films, selectedFilm: films[0]} )
      }
    }
    request.send()
  }

  setSelectedFilm(film){
    this.setState({selectedFilm: film})
  }

  render(){
    return(
      <div>
        <ShowSelector films={this.state.films} setSelectedFilm={this.setSelectedFilm.bind(this)}/>
       <ShowDetails film={this.state.selectedFilm} />
      </div>
    )
  }
}

export default ShowContainer