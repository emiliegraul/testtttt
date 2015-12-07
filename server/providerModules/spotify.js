// accept id
// handle case when link is bad for single track
var spotify = require('spotify');

module.exports = function (searchInfo, callback) {

  var lookupById = function(id) {
    spotify.lookup({ type: 'track', id: spotifyID}, function(err, data) {
        if ( err ) {
          callback(error)
          return;
        }
        makePrettyObject(data);      
    });
  };

  var searchSpotifyByObj = function (songObject) {
    spotify.search({ type: 'track', album: obj.album_name, track: obj.name, artist: obj.artist, limit: 1}, function(err, data) {
        if ( err ) {
          callback(error)
          return;
        }
        makePrettyObject(data);      
    });
  };

  var searchSpotifyByUrl = function (songUrl) {
    lookupById(songUrl);
  };

  var makePrettyObject = function(obj) {
    var formattedSongInfo = {
      title: obj.tracks.items[0].name,
      artist: obj.tracks.items[0].artists[0].name,
      title: obj.tracks.items[0].album.name,
      album_art: obj.tracks.items[0].album.images[0].url,
      album_art_size: 10000,
      spotify_id: obj.tracks.items[0].id
    };
    console.log(formattedSongInfo);
  };

  typeof searchInfo === "string" ? searchSpotifyByUrl(searchInfo) : searchSpotifyByObj(searchInfo)
};
