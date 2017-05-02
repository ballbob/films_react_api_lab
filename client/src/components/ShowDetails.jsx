import React from 'react'

class ShowDetails extends React.Component {


  render(){
    if (!this.props.film){
      return null
    }

    return (
      <div id="film-detail">
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
      </div>
      )
  }

}

export default ShowDetails