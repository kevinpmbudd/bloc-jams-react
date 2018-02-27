// renamed to Album.js from album.js, git keeps dropping name change
import React, { Component } from 'react';

class Album extends Component {
  render() {
    return (
      <section className="album">
        {this.props.match.params.slug} Album here
      </section>
    )
  }
}
export default Album;
