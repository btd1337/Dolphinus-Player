import React, { Component } from 'react';

class Home extends Component {

  constructor() {
    super();
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
                      <a href={album.external_url} target="_blank">{album.name}</a>      
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