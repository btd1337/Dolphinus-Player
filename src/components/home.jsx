import React, { Component } from 'react';
import { Link, Route, Switch } from 'react-router-dom';

class Home extends Component {

  constructor(props) {
    super(props);
  }

  defineAlbum(album) {
    this.props.setAlbum(album);
  }

	render() {
		return (
      <section className="home">
        <article className="artist">
          <h2 className="artist-name">John Williams</h2>
          <div className="albums">
            {this.props.albums.map((album) => (
              <div className="album" key={album.id}>
                <div className="vinyl">
                  <div className="grooves"></div>
                  <div className="light"></div>
                  <div className="light-alt"></div>
                  <figure className="macaron">
                    <img className="cover" src={album.cover} />
                    <figcaption className="album-name">
                      <Link 
                        to={'/albums/' + album.id} 
                        onClick={() => this.defineAlbum(album.id)}>
                        {album.name}
                      </Link>     
                    </figcaption>
                  </figure>
                </div>
              </div>
            ))}
          </div>
        </article>
      </section>
		)
  }
}

export default Home;