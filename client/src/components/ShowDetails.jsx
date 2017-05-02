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
      </div>
      )
  }

}

export default ShowDetails