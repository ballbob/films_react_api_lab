import React from 'react'

class ShowDetails extends React.Component {


  render(){
    if (!this.props.film){
      return null
    }

    return (
      <div id="film-detail">

        <div id="poster">
          <img id="poster-img" src={this.props.film.poster}/>
        </div>

        <div id ="details">
        <h4>
          {this.props.film.show_title}
        </h4>

        <p>
          Released: {this.props.film.release_year}
        </p>

        <p>
          Rating: {this.props.film.rating}
        </p>

        <p>
          Cast: {this.props.film.show_cast}
        </p>

        <p>
          Director: {this.props.film.director}
        </p>

        <p>
          Synopsis: {this.props.film.summary}
        </p>

        <p>
          Runtime: {this.props.film.runtime}
        </p>
        </div>
      </div>

      )
  }

}

export default ShowDetails