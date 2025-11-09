let songs = [];
let currentsong = new Audio();
let currenturl;


const ALBUM_DATA = {
    "songs/Badmosh Album ddd Description Listen to Badmosh Gangster Songs sss/": [
        "songs/Badmosh Album ddd Description Listen to Badmosh Gangster Songs sss/2 Khatole-Masoom Sharma & Vikash Rajana.mp3",
        "songs/Badmosh Album ddd Description Listen to Badmosh Gangster Songs sss/2 Numbari-Masoom Sharma & Manisha Sharma.mp3",
        "songs/Badmosh Album ddd Description Listen to Badmosh Gangster Songs sss/Blender-Masoom Sharma & Swara Verma.mp3",
        "songs/Badmosh Album ddd Description Listen to Badmosh Gangster Songs sss/Chambal Ke Daku-Masoom Sharma & Swara Verma.mp3",
        "songs/Badmosh Album ddd Description Listen to Badmosh Gangster Songs sss/Jai aur Veeru-Khasa Ala Chahar.mp3",
        "songs/Badmosh Album ddd Description Listen to Badmosh Gangster Songs sss/Lofar-Masoom Sharma & Swara verma.mp3",
        "songs/Badmosh Album ddd Description Listen to Badmosh Gangster Songs sss/Russian Bandana-Dhanda Nyoliwala.mp3",
        "songs/Badmosh Album ddd Description Listen to Badmosh Gangster Songs sss/Tension-Dhanda Nyoliwala.mp3"
    ],
    "songs/Bhakti Songs ddd Description Radhe Radhe sss/": [
        "songs/Bhakti Songs ddd Description Radhe Radhe sss/Braj ko tore-Priya Gulati.mp3",
        "songs/Bhakti Songs ddd Description Radhe Radhe sss/Main Haara-Jainen Paras Chhabra.mp3",
        "songs/Bhakti Songs ddd Description Radhe Radhe sss/Shyama Aan Baso Vrindavan Me-Larissa Almeida.mp3",
        "songs/Bhakti Songs ddd Description Radhe Radhe sss/Suno Krishna Pyaare-Swati Mishra.mp3"
    ],
    "songs/Bhojpuri Album ddd Description Listen to Bhojpuri Songs sss/": [
        "songs/Bhojpuri Album ddd Description Listen to Bhojpuri Songs sss/Bullet Pe Jija-Vinay Pandey & Shilpi Raj.mp3",
        "songs/Bhojpuri Album ddd Description Listen to Bhojpuri Songs sss/Godanwa-Nirahua & Shilpi Raj.mp3",
        "songs/Bhojpuri Album ddd Description Listen to Bhojpuri Songs sss/Lehanga Lakhnauwa-Khesari Lal Yadav.mp3",
        "songs/Bhojpuri Album ddd Description Listen to Bhojpuri Songs sss/Nadi Biche Naiya Dole-Shilpi Raj & Rani.mp3",
        "songs/Bhojpuri Album ddd Description Listen to Bhojpuri Songs sss/Sarso Ke Sagiya-Khesari Lal Yadav.mp3",
        "songs/Bhojpuri Album ddd Description Listen to Bhojpuri Songs sss/Ye Aara Kabhi Hara Nahi-Pawan Singh.mp3"
    ],
    "songs/Bollywood ddd Description How about Bollywood! sss/": [
        "songs/Bollywood ddd Description How about Bollywood! sss/Into You-Hiten.mp3",
        "songs/Bollywood ddd Description How about Bollywood! sss/Made in India-Guru Randhawa.mp3",
        "songs/Bollywood ddd Description How about Bollywood! sss/Saiyaara-Tanishk Bagchi.mp3",
        "songs/Bollywood ddd Description How about Bollywood! sss/Saiyaara-Kishor Kumar.mp3",
        "songs/Bollywood ddd Description How about Bollywood! sss/SIRRA-Guru Randhawa.mp3"
    ],
    "songs/English Songs ddd Description Listen to some English Songs sss/": [
        "songs/English Songs ddd Description Listen to some English Songs sss/Bad Boy-Marwa Loud.mp3",
        "songs/English Songs ddd Description Listen to some English Songs sss/Take You Dancing-Jason Derulo.mp3"
    ],
    "songs/Honey Singh ddd Description Yo Yo Honey Singh sss/": [
        "songs/Honey Singh ddd Description Yo Yo Honey Singh sss/Blue Eyes-Honey Singh.mp3",
        "songs/Honey Singh ddd Description Yo Yo Honey Singh sss/One Bottle Down-Honey Singh.mp3"
    ],
    "songs/Michael Jackson ddd Description Dangerous, The girl is so dangerous sss/": [
        "songs/Michael Jackson ddd Description Dangerous, The girl is so dangerous sss/Dangerous-Michael Jackson.mp3",
        "songs/Michael Jackson ddd Description Dangerous, The girl is so dangerous sss/Smooth Criminal-Michael Jackson.mp3"
    ],
    "songs/Phonk Album ddd Description Try some Phonk sss/": [
        "songs/Phonk Album ddd Description Try some Phonk sss/2 Phut Hon (KAIZ Remix)-Phao.mp3",
        "songs/Phonk Album ddd Description Try some Phonk sss/Automotivo Catacada-ShurikeX.mp3",
        "songs/Phonk Album ddd Description Try some Phonk sss/BLAH! Salesman-NOMI XD.mp3",
        "songs/Phonk Album ddd Description Try some Phonk sss/FUNK CRIMINAL (SUPER SLOWED)-ICEMANE.mp3",
        "songs/Phonk Album ddd Description Try some Phonk sss/MONTAGEM RUGADA-MONTAGEM.mp3",
        "songs/Phonk Album ddd Description Try some Phonk sss/NEXT! (Super Slowed)-ncts.mp3",
        "songs/Phonk Album ddd Description Try some Phonk sss/REBOLATON (slowed)-RXVEN.mp3",
        "songs/Phonk Album ddd Description Try some Phonk sss/SEMPERO (Super Slowed)-SUKA..mp3",
        "songs/Phonk Album ddd Description Try some Phonk sss/Storm Funk-Sakio!.mp3",
        "songs/Phonk Album ddd Description Try some Phonk sss/TENI TENI (SLOWED)-HEAZY.mp3"
    ]
};
let albums = Object.keys(ALBUM_DATA);
let currentalbumlink;
let tempvolumelevel;
let currentsongname;
async function getsongs() {
    document.querySelector(".playlistcontainer").innerHTML = "";
    for (const song of songs) {
        let songtitleandauthor = song.split("songs")[1].replaceAll("%20", " ").replaceAll("%5C", " ").split(".mp3")[0];
        let authorname = songtitleandauthor.split("-")[1];
        let songname = songtitleandauthor.split("-")[0].split("sss",)[1].slice(1);
        document.querySelector(".playlistcontainer").innerHTML = document.querySelector(".playlistcontainer").innerHTML + `<div class="musictile" data-song="${song}">
                    <div class="lsomt">
                        <img class="music" src="svgs/music.svg" alt="">
                        <div class="musictextcontainer">
                            
                            <div class="mtsongname">${songname}</div>
                            <div class="mtauthor">${authorname}</div>
                        </div>
                    </div>
                    <div class="rsomt">
                        <p class="playnow">Play now</p>
                        <img src="svgs/play.svg" alt="" class="mtplay">
                    </div>
                </div>`;
    }
    return songs;
}


async function arraysongloader(link) {

    if (ALBUM_DATA[link]) {
        songs = ALBUM_DATA[link];
    } else {
        songs = [];
    }
}
async function albumloader() {
    for (const album of albums) {
        let albumnameanddescription = album.split("songs")[1];
        let albumname = albumnameanddescription.split("ddd")[0].replaceAll("%20", " ").replaceAll("%5C", " ").trim().slice(1);
        let albumdescription = albumnameanddescription.split("Description")[1].replaceAll("%20", " ").replaceAll("%5C", " ").replaceAll("sss/", "").trim();
        let coverpath = album + "cover.jpg";
        document.querySelector(".albumscontainer").innerHTML = document.querySelector(".albumscontainer").innerHTML + `<div class="card" data-album="${album}">
                    <img class="cardimage" src="${coverpath}" alt="failed to load">
                    <p class="cardheading">${albumname}</p>
                    <p class="carddescription">${albumdescription}</p>
                </div>`;
    }
}

//playmusic function
function playmusic(track) {
    currentsong.src = track;
    currentsong.play();
    document.querySelector(".playbutton").src = "svgs/pause.svg";
    document.querySelector(".audiotitle").innerHTML = track.split("sss/")[1].replaceAll("%20", " ").replaceAll("%5C", " ").replaceAll(".mp3", "").split("-")[0] + " - " + track.split("sss")[1].replaceAll("%20", " ").replaceAll("%5C", " ").replaceAll(".mp3", "").split("-")[1];
}

//duration seconds formatter

function durationformatter(seconds) {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs.toString().padStart(2, '0')}`;
}
function playnextsong() {
    if (songs.indexOf(currenturl) < songs.length - 1) {
        currenturl = songs[(songs.indexOf(currenturl)) + 1]
        playmusic(currenturl);
    }
}

function playprevioussong() {
    if (songs.indexOf(currenturl) > 0) {
        currenturl = songs[(songs.indexOf(currenturl)) - 1]
        playmusic(currenturl);
    }
}
function volumeup() {
    currentsong.volume = Math.floor(currentsong.volume * 100) / 100
    if (currentsong.volume < 0.98) {
        currentsong.volume += 0.02;
    }
    else {
        currentsong.volume = 1;
    }
}
function volumedown() {
    currentsong.volume = Math.floor(currentsong.volume * 100) / 100
    if (currentsong.volume > 0.02) {
        currentsong.volume -= 0.02;
    }
    else {
        currentsong.volume = 0;
    }
}
async function main() {
    await albumloader();
    document.querySelectorAll(".card").forEach(element => {
        element.addEventListener("click", async () => {
            currentalbumlink = element.dataset.album;
            songs = []
            await arraysongloader(currentalbumlink);
            await getsongs();
            if (songs.length > 0) {
                currenturl = songs[0];
                playmusic(currenturl);
            }

            // event listener for clicking music tiles
            document.querySelectorAll(".musictile").forEach(element => {
                element.addEventListener("click", () => {
                    currenturl = element.dataset.song; 
                    playmusic(currenturl);
                });
            });
        });
    });

    //play pause eventlistener through mouse
    document.querySelector(".playbutton").addEventListener("click", () => {
        if (currentsong.paused) {
            currentsong.play();
            document.querySelector(".playbutton").src = "svgs/pause.svg";
        }
        else {
            document.querySelector(".playbutton").src = "svgs/play.svg";
            currentsong.pause();
        }
    })

    //play and pause through space key
    document.addEventListener("keydown", (e) => {
        if (e.code === "Space" || e.code === "KeyK") {
            e.preventDefault(); // prevent page scroll
            if (currentsong.paused) {
                currentsong.play();
                document.querySelector(".playbutton").src = "svgs/pause.svg";
            } else {
                currentsong.pause();
                document.querySelector(".playbutton").src = "svgs/play.svg";
            }
        }
    });

    //duration updater
    currentsong.addEventListener("timeupdate", () => {
        document.querySelector(".durationbox").innerHTML = durationformatter(currentsong.currentTime) + "/" + durationformatter(currentsong.duration);
        document.querySelector(".playhead").style.left = currentsong.currentTime / currentsong.duration * 100 + "%";
        document.querySelector(".progressed").style.width = currentsong.currentTime / currentsong.duration * 100 + "%";
        document.querySelector(".soundlevel").textContent = Math.floor(currentsong.volume * 100);
        if (currentsong.currentTime === currentsong.duration) {
            playnextsong();
        }

    })
    //duration changer
    document.querySelector(".seek").addEventListener("click", e => {
        document.querySelector(".playhead").style.left = e.offsetX / e.currentTarget.clientWidth * 100 + "%";
        document.querySelector(".progressed").style.width = e.offsetX / e.currentTarget.clientWidth * 100 + "%";
        currentsong.currentTime = e.offsetX / e.currentTarget.clientWidth * currentsong.duration;
    })
    //5 sec skip
    document.addEventListener("keydown", (e) => {
        if (e.code === "ArrowRight" && !e.altKey) {
            e.preventDefault();

            currentsong.currentTime += 5;

        }
    });
    //5 sec back
    document.addEventListener("keydown", (e) => {
        if (e.code === "ArrowLeft" && !e.altKey) {
            e.preventDefault();

            currentsong.currentTime -= 5;

        }
    });

    //nextsong
    document.querySelector(".nextbutton").addEventListener("click", () => {
        playnextsong();
    })

    //previoussong
    document.querySelector(".previousbutton").addEventListener("click", () => {
        playprevioussong();
    })

    //nextsong by alt + ->
    document.addEventListener("keydown", (e) => {
        if (e.altKey && e.code === "ArrowRight") {
            playnextsong();
        }
    });
    //previous song by alt + <-
    document.addEventListener("keydown", (e) => {
        if (e.altKey && e.code === "ArrowLeft") {
            playprevioussong();
        }
    });

    //volume changer
    document.querySelector(".soundseek").addEventListener("click", e => {
        document.querySelector(".soundplayhead").style.left = e.offsetX / e.currentTarget.clientWidth * 100 + "%";
        document.querySelector(".soundprogress").style.width = e.offsetX / e.currentTarget.clientWidth * 100 + "%";
        currentsong.volume = e.offsetX / e.currentTarget.clientWidth;
        document.querySelector(".soundlevel").textContent = Math.floor(currentsong.volume * 100);

    })

    //volume up by up arrow up
    document.addEventListener("keydown", (e) => {
        if (e.code === "ArrowUp") {
            e.preventDefault();
            volumeup();
            document.querySelector(".soundplayhead").style.left = currentsong.volume * 100 + "%";
            document.querySelector(".soundprogress").style.width = currentsong.volume * 100 + "%";
            document.querySelector(".soundlevel").textContent = Math.floor(currentsong.volume * 100);
        }
    });
    //volume down by up arrow down
    document.addEventListener("keydown", (e) => {
        if (e.code === "ArrowDown") {
            e.preventDefault();
            volumedown();
            document.querySelector(".soundplayhead").style.left = currentsong.volume * 100 + "%";
            document.querySelector(".soundprogress").style.width = currentsong.volume * 100 + "%";
            document.querySelector(".soundlevel").textContent = Math.floor(currentsong.volume * 100);
        }
    });
    //mute : -
    document.querySelector(".soundbutton").addEventListener("click", () => {
        if (currentsong.volume != 0) {
            tempvolumelevel = currentsong.volume;
            currentsong.volume = 0;
            document.querySelector(".soundbutton").src = "svgs/mute.svg"
            document.querySelector(".soundplayhead").style.left = "0%"
            document.querySelector(".soundprogress").style.width = "0%";
        }
        else {
            currentsong.volume = tempvolumelevel;
            document.querySelector(".soundbutton").src = "svgs/sound.svg"
            document.querySelector(".soundplayhead").style.left = tempvolumelevel * 100 + "%"
            document.querySelector(".soundprogress").style.width = tempvolumelevel * 100 + "%"
        }
    })
    //mute unmute by m button
    document.addEventListener("keydown", (e) => {
        if (e.code === "KeyM") {
            if (currentsong.volume != 0) {
                tempvolumelevel = currentsong.volume;
                currentsong.volume = 0;
                document.querySelector(".soundbutton").src = "svgs/mute.svg"
                document.querySelector(".soundplayhead").style.left = "0%"
                document.querySelector(".soundprogress").style.width = "0%";
            }
            else {
                currentsong.volume = tempvolumelevel;
                document.querySelector(".soundbutton").src = "svgs/sound.svg"
                document.querySelector(".soundplayhead").style.left = tempvolumelevel * 100 + "%"
                document.querySelector(".soundprogress").style.width = tempvolumelevel * 100 + "%"
            }
        }
    });
    //clicking hamburger
    document.querySelector(".hamburger").addEventListener("click", () => {
        document.querySelector(".left").classList.toggle("lefthamburgerclicked")
    })
}
main();


