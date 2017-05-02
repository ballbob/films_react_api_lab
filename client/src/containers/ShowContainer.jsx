import React from 'react'

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
        console.log(films)
        this.setState( {films: films, selectedFilm: films[0]} )
      }
    }
    request.send()
  }

  render(){
    return(
      <p>This is the show container.</p>
      )
  }
}

export default ShowContainer