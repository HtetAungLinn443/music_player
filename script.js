console.log("Welcome to Spotify");
//Initialize the Variables
let songIndex = 0;
let audioElement = new Audio('./music/music_8.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItem = Array.from(document.getElementsByClassName('songItem'));


let songs = [
    { songName: "Angel Baby", filePath: "./music/music_1.mp3", coverPath: "./image/cvlogo1.jpg" },
    { songName: "Cartoon - On & On", filePath: "./music/music_2.mp3", coverPath: "./image/cvlogo2.jpg" },
    { songName: "Infraction ", filePath: "./music/music_3.mp3", coverPath: "./image/cvlogo3.jpg" },
    { songName: "ကိုယ်စောင့်နတ်", filePath: "./music/music_4.mp3", coverPath: "./image/cvlogo4.jpg" },
    { songName: "ပြန်လာချိန်လေး - မျိုးကြီး", filePath: "./music/music_5.mp3", coverPath: "./image/cvlogo5.jpg" },
    { songName: "သူစိမ်းတစ်ယောက် - မျိုးကြီး", filePath: "./music/music_6.mp3", coverPath: "./image/cvlogo6.jpg" },
    { songName: "MAY - A Yan Lwan Nay P", filePath: "./music/music_7.mp3", coverPath: "./image/cvlogo7.jpg" },
    { songName: "May _ PAST 12 - Kyal", filePath: "./music/music_8.mp3", coverPath: "./image/cvlogo8.png" },
    { songName: "Mee No - A Hnaung A Phwe", filePath: "./music/music_9.mp3", coverPath: "./image/cvlogo9.jpg" },

]

songItem.forEach((element, i) => {

    element.getElementsByTagName('img')[0].src = songs[i].coverPath;
    element.getElementsByClassName('songName')[0].innerText = songs[i].songName;
})

// audioElement.play();

//Handle play/pause click
masterPlay.addEventListener("click", () => {
    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
        gif.style.opacity = 1;
    } else {
        audioElement.pause();
        masterPlay.classList.remove('fa-circle-pause');
        masterPlay.classList.add('fa-circle-play');
        gif.style.opacity = 0;
    };
});

// Listen to Events 
audioElement.addEventListener('timeupdate', () => {
    // Update Seekber
    progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
    myProgressBar.value = progress;
})

myProgressBar.addEventListener('change', () => {
    audioElement.currentTime = myProgressBar.value * audioElement.duration / 100;
})

const makeAllPlays = () => {
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
        element.classList.remove('fa-circle-pause');
        element.classList.add('fa-circle-play');
    })
}
Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
    element.addEventListener('click', (e) => {
        makeAllPlays();
        SongIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-circle-play');
        e.target.classList.add('fa-circle-pause');
        audioElement.src = `./music/music_${songIndex+1}.mp3`;
        masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
        masterPlay.classList.remove('fa-circle-paly');
        masterPlay.classList.add('fa-circle-pause');
    })
})

document.getElementById('next').addEventListener('click', () => {
    if (songIndex >= 9) {
        songIndex = 0
    } else {
        songIndex += 1;
    }
    audioElement.src = `./music/music_${songIndex+1}.mp3`;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-circle-paly');
    masterPlay.classList.add('fa-circle-pause');

})

document.getElementById('previous').addEventListener('click', () => {
    if (songIndex <= 0) {
        songIndex = 0
    } else {
        songIndex += 1;
    }
    audioElement.src = `./music/music_${songIndex+1}.mp3`;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.add('fa-circle-paly');
    masterPlay.classList.remove('fa-circle-pause');

})