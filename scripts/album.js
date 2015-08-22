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
 
     return $(template);
 
 };

var setCurrentAlbum = function(album) {
 
     // #1
     var $albumTitle = $('.album-view-title');
     var $albumArtist = $('.album-view-artist');
     var $albumReleaseInfo = $('.album-view-release-info');
     var $albumImage = $('.album-cover-art');
     var $albumSongList = $('.album-view-song-list');
     // #2
     $albumTitle.text(album.name);
     $albumArtist.text(album.artist);
     $albumReleaseInfo.text(album.year + ' ' + album.label);
     $albumImage.attr('src', album.albumArtUrl);
 
     // #3
     $albumSongList.empty();
 
     // #4
     for (i = 0; i < album.songs.length; i++) {
         var $newRow = createSongRow(i + 1, album.songs[i].name, album.songs[i].length);
         $albumSongList.append($newRow);
     }
 
 };

//use console.logs based on step you're at or the conditionals that might be exhibiting unexpected behavior
var findParentByClassName = function(element, targetClass) {
    
    var currentParent = element.parentElement;
    
   
    if (element.parentNode === undefined || element.parentNode === null) {
        alert("No parent found");
    }
    //if parentnode doesn't exist then done otherwise going to while loop until you hit targetClass, null, or undefined
    else
    {
        
             while (currentParent.className != targetClass && currentParent != null && currentParent != "undefined") 
             {
                 currentParent = currentParent.parentElement;
                 //this is the loop
             }

            if(currentParent === null || currentParent == "undefined")
                 alert("No parent with target class found");
            //broke out of the loop because hit null, undefinded
            else
                alert(" parent found with target className");
            //otherwise it hit the targetClass

            
    }
    
    return currentParent;

};


//var findParentByClassName = function(element, targetClass) {
//     var currentParent = element.parentElement;
//
//        if (currentParent.className != targetClass) {
//           currentParent = currentParent.parentElement;
//           alert(currentParent.textContent + " Hello Steve!");
//        }
//
//        else if (element.parentNode != targetClass) {
//            alert("No parent found with that class name");
//        }
//        else if (element.parentNode !== currentParent) {
//            alert("No parent found");
//        }
//    else {
//    return;
//    }
//};


//var findParentByClassName = function(element, targetClass) {
//    var currentParent
//    do {
//        currentParent = element.parentElement
//        
//        if (currentParent === null) {
//              alert("No parent found");
//              break
//        }
//        else if (currentParent.className != targetClass) {
//              alert("Class doesn't match")
//              break           
//        }
//        alert("Match found");
//    } while (currentParent.className != targetClass || currentParent != null) 
//};

               
var getSongItem = function(element) {
    
    switch (element.className) {
        case 'album-song-button':
        case 'ion-play':
        case 'ion-pause':
            return findParentByClassName(element, 'song-item-number');
        case 'album-view-song-item':
            return element.querySelector('.song-item-number');
        case 'song-item-title':
        case 'song-item-duration':
            return findParentByClassName(element, 'album-view-song-item').querySelector('.song-item-number');
        case 'song-item-number':
            return element;
        default:
            return;
    }
    
};

 var clickHandler = function(targetElement) {
     
     var songItem = getSongItem(targetElement); 
     if (currentlyPlayingSong === null) {
        songItem.innerHTML = pauseButtonTemplate;
        currentlyPlayingSong = songItem.getAttribute('data-song-number');
    } else if (currentlyPlayingSong === songItem.getAttribute('data-song-number')) {
         songItem.innerHTML = playButtonTemplate;
         currentlyPlayingSong = null;
     } else if (currentlyPlayingSong !== songItem.getAttribute('data-song-number')) {
         var currentlyPlayingSongElement = document.querySelector('[data-song-number="' + currentlyPlayingSong + '"]');
         currentlyPlayingSongElement.innerHTML = currentlyPlayingSongElement.getAttribute('data-song-number');
         songItem.innerHTML = pauseButtonTemplate;
         currentlyPlayingSong = songItem.getAttribute('data-song-number');
     }
 
 };

 // Elements we'll be adding listeners to
var songListContainer = document.getElementsByClassName('album-view-song-list')[0];
var songRows = document.getElementsByClassName('album-view-song-item');

 
 // Album button templates
var playButtonTemplate = '<a class="album-song-button"><span class="ion-play"></span></a>';
var pauseButtonTemplate = '<a class="album-song-button"><span class="ion-pause"></span></a>';

 // Store state of playing songs
 var currentlyPlayingSong = null;

 

 window.onload = function() {
  var albumCounter = 0;

  setCurrentAlbum(albumPicasso);
     
      songListContainer.addEventListener('mouseover', function(event) {
          // Only target individual song rows during event delegation
     if (event.target.parentElement.className === 'album-view-song-item') {
         // Change the content from the number to the play button's HTML
         
         var songItem = getSongItem(event.target);

            if (songItem.getAttribute('data-song-number') !== currentlyPlayingSong) {
                songItem.innerHTML = playButtonTemplate;
            }
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
               var leavingSongItem = getSongItem(event.target);
             var leavingSongItemNumber = leavingSongItem.getAttribute('data-song-number');
 
             // #2
             if (leavingSongItemNumber !== currentlyPlayingSong) {
                 leavingSongItem.innerHTML = leavingSongItemNumber;
             }
         });
     songRows[i].addEventListener('click', function(event) {
            clickHandler(event.target);
         });
     }    
};



     


