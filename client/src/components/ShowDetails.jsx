import React from 'react'

class ShowDetails extends React.Component {


  render(){
    if (!this.props.film){
      return null
    }

    return (
      <div id="film-detail">

        <img src={this.props.film.poster}/>

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
          Runtime: {this.props.film.runtime}
        </p>

      </div>
      
      )
  }

}

export default ShowDetails