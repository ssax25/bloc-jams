// Example Album
 var albumPicasso = {
     name: 'The Colors',
     artist: 'Pablo Picasso',
     label: 'Cubism',
     year: '1881',
     albumArtUrl: '/assets/images/album_covers/01.png',
     songs: [
         { name: 'Blue', length: '4:26' },
         { name: 'Green', length: '3:14' },
         { name: 'Red', length: '5:01' },
         { name: 'Pink', length: '3:21'},
         { name: 'Magenta', length: '2:15'}
     ]
 };
 
 // Another Example Album
 var albumMarconi = {
     name: 'The Telephone',
     artist: 'Guglielmo Marconi',
     label: 'EM',
     year: '1909',
     albumArtUrl: 'assets/images/album_covers/20.png',
     songs: [
         { name: 'Hello, Operator?', length: '1:01' },
         { name: 'Ring, ring, ring', length: '5:01' },
         { name: 'Fits in your pocket', length: '3:21'},
         { name: 'Can you hear me now?', length: '3:14' },
         { name: 'Wrong phone number', length: '2:15'}
     ]
 };

var albumStevesTunes = {
    name: 'A Great Song',
    artist: 'Steve Sax',
    label: 'Capital',
    year: '2015',
    albumartUrl: 'assets/images/album_covers/01.png',
    songs: [
        { name: 'My Jam', length: '2:31' },
        { name: 'Another Great song', length: '1:34' },
        { name: 'Yet another amazing tune', length: '3:45' },
        { name: 'More good jams', length: '4:22' },
        { name: 'Yep, another one', length: '3:01' }
        ]
};

 var createSongRow = function(songNumber, songName, songLength) {
     
     var template =
        '<tr class="album-view-song-item">'
      + '  <td class="song-item-number" data-song-number="' + songNumber + '">' + songNumber + '</td>'
      + '  <td class="song-item-title">' + songName + '</td>'
      + '  <td class="song-item-duration">' + songLength + '</td>'
      + '</tr>'
      ;
 
     return template;
 
 };

var setCurrentAlbum = function(album) {
 
     // #1
     var albumTitle = document.getElementsByClassName('album-view-title')[0];
     var albumArtist = document.getElementsByClassName('album-view-artist')[0];
     var albumReleaseInfo = document.getElementsByClassName('album-view-release-info')[0];
     var albumImage = document.getElementsByClassName('album-cover-art')[0];
     var albumSongList = document.getElementsByClassName('album-view-song-list')[0];
 
     // #2
     albumTitle.firstChild.nodeValue = album.name;
     albumArtist.firstChild.nodeValue = album.artist;
     albumReleaseInfo.firstChild.nodeValue = album.year + ' ' + album.label;
     albumImage.setAttribute('src', album.albumArtUrl);
 
     // #3
     albumSongList.innerHTML = '';
 
     // #4
     for (i = 0; i < album.songs.length; i++) {
         albumSongList.innerHTML += createSongRow(i + 1, album.songs[i].name, album.songs[i].length);
     }
 
 };

 // Elements we'll be adding listeners to
var songListContainer = document.getElementsByClassName('album-view-song-list')[0];
var songRows = document.getElementsByClassName('album-view-song-item');

 
 // Album button templates
var playButtonTemplate = '<a class="album-song-button"><span class="ion-play"></span></a>';
 

 window.onload = function() {
  var albumCounter = 0;

  setCurrentAlbum(albumPicasso);
     
      songListContainer.addEventListener('mouseover', function(event) {
          // Only target individual song rows during event delegation
     if (event.target.parentElement.className === 'album-view-song-item') {
         // Change the content from the number to the play button's HTML
         event.target.parentElement.querySelector('.song-item-number').innerHTML = playButtonTemplate;
     }
     });
  // DEFINE INPUTS
  // Create a function that will switch to a new album when the cover image is clicked
// Put albums in an array
  var albumArray = [albumPicasso, albumMarconi, albumStevesTunes];

// DEFINE PROCESS
// When the cover image is clicked, return next item in the array
  function switchAlbum(){
// When this function runs, switch to next album
    albumCounter++;
// If counter is greater than length, reset count to 0
    if (albumCounter >= albumArray.length) {
      albumCounter = 0;
    };

// DISPLAY OUTPUT
// Set album by index position
    setCurrentAlbum(albumArray[albumCounter]);
  }

  var albumImage = document.getElementsByClassName('album-cover-art')[0];
//  console.log(albumImage)
 //albumImage.addEventListener('click', function (event) {
 //   switchAlbum();
//  });
albumImage.addEventListener('click',switchAlbum); {
//<!--  in the css for the album cover add: cursor: pointer;-->
};
for (i = 0; i < songRows.length; i++) {
         songRows[i].addEventListener('mouseleave', function(event) {
             // Revert the content back to the number
               // Selects first child element, which is the song-item-number element
             this.children[0].innerHTML = this.children[0].getAttribute('data-song-number');
         });
     }    
};



     


