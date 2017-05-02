import React from 'react'
import ShowSelector from '../components/ShowSelector'
import ShowDetails from '../components/ShowDetails'
import ShowSearch from '../components/ShowSearch'

class ShowContainer extends React.Component{

  constructor(props){
    super(props)
    this.state = {
      films: [],
      selectedFilm: null,
      searchActor: "Nicolas Cage"
    }
  }

  componentDidMount(){
    this.makeRequest()
  }

  makeRequest(){
    const url = "http://netflixroulette.net/api/api.php?actor=" + this.state.searchActor
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

  handleSearchSubmit(actor){
    this.setState({ searchActor: actor })
    this.makeRequest()
  }

  render(){
    return(
      <div id="container">
        <ShowSelector films={this.state.films} setSelectedFilm={this.setSelectedFilm.bind(this)}/>
       <ShowDetails film={this.state.selectedFilm} />
       <ShowSearch handleSubmit={this.handleSearchSubmit.bind(this)} />
      </div>
    )
  }
}

export default ShowContainer