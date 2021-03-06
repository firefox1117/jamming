import React from 'react'
import './App.css';
import SearchBar from '../SearchBar/SearchBar'
import SearchResults from '../SearchResults/SearchResults';
import Playlist from '../Playlist/Playlist';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      searchResults: [{name: 'name', artist: 'artist', album: 'album', id:1},
      {name: 'name2', artist: 'artist2', album: 'album2', id:2}, {name: 'name3', artist: 'artist3', album: 'album3', id:3}],
      PlaylistName: 'My Playlist',
      PlaylistTracks: [{name: 'playlistname1', artist: 'playlistArtist1', album: 'playlistalbum1', id: 4}, 
      {name: 'playlistname2', artist: 'playlistArtist2', album: 'playlistalbum2', id: 5},
      {name: 'playlistname3', artist: 'playlistArtist3', album: 'playlistalbum3', id: 6} ]
    };
    this.addTrack = this.addTrack.bind(this);
    this.removeTrack = this.removeTrack.bind(this)
  }

  addTrack(track) {
    let tracks = this.state.PlaylistTracks;
    if(tracks.find(savedTrack => savedTrack.id === track.id)) {
      return;
    } 

    tracks.push(track);
    this.setState({playlistTracks: tracks})
  }

  removeTrack(track) {
    let tracks = this.state.PlaylistTracks;
    tracks = tracks.filter(currentTrack => currentTrack.id !== track.id)

    this.setState({playlistTracks: tracks});
  }


  render() {
    return (
      <div>
          <h1>Ja<span className="highlight">mmm</span>ing</h1>
          <div className="App">
          
           <SearchBar />
          <div className="App-playlist">
            <SearchResults searchResults={this.state.searchResults}
            onAdd={this.addTrack} />
            <Playlist playlistName= {this.state.PlaylistName} 
            playlistTracks={this.state.PlaylistTracks} 
            onRemove={this.removeTrack}/>
      </div>
  </div>
</div>
    )
  }
}

export default App;
