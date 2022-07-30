const audio = dom_id("audio");
const audio_seri = dom_id("seri");
const audio_name = dom_id("name");
const artist_name = dom_id("artist");
const audio_path = dom_id("audio");
const audio_image = dom_id("img");
const full_time_text = dom_id("full_time");
const played_time_text = dom_id("played_time");
const Album = {
  seri: ["1", "2", "3", "4", "5"],
  name: ["Faded", "Đào nương", "Deja vu", "Mộ tuyết", "Xuân Tháng Ba"],
  artist: [
    "Alan Walker",
    "Hoàng Vương",
    "Olivia Rodrigo",
    "Thiên Sơn Mộ Tuyết OST",
    "TunamTina",
  ],
  path: [
    "./songs/Alan Walker - Faded.mp3",
    "./songs/DaoNuong-HoangVuong-7037330.mp3",
    "./songs/Deja Vu - Olivia Rodrigo.mp3",
    "./songs/MoTuyetThienSonMoTuyetOST-V.A-2982516.mp3",
    "./songs/XuanThangBa-TuNamTiNa-6231142.mp3",
  ],
  image: [
    "https://cyber-music-player.vercel.app/images/Faded.jpg",
    "https://i.ytimg.com/vi/PM9Vc_agAqg/maxresdefault.jpg",
    "https://i1.sndcdn.com/artworks-LvTdHlotpRViB8DK-yIyxcw-t500x500.jpg",
    "https://salt.tikicdn.com/ts/tmp/d8/46/10/a4f728d583ca7693589375babeb07c9b.jpg",
    "https://i1.sndcdn.com/artworks-YIesfXSZxuthUthD-2nO8eQ-t500x500.jpg",
  ],
};
//Play audio
function playAudio() {
  //add d-none: hidden --- remove d-none: show
  add("play", "d-none");
  remove("pause", "d-none");
  //play and pause audio image animation
  assignClassName("img", "img_play_animation");
  //Wave Animation
  remove("wave_animation", "d-none");
  audio.play();
}
//Pause audio
function pauseAudio() {
  add("pause", "d-none");
  remove("play", "d-none");
  assignClassName("img", "img_pause_animation");
  add("wave_animation", "d-none");
  audio.pause();
}
//Replay 1 audio
function reloadAudio() {
  add("play", "d-none");
  remove("pause", "d-none");
  assignClassName("img", "img_play_animation");
  remove("wave_animation", "d-none");
  audio.load();
  audio.play();
}
//Adjus volume -- xem lại, chỉnh cho window
function adjustVolume() {
  var input_number = document.getElementById("adjust_volume").value / 100;
  audio.volume = input_number;
}
//Change time
function changeCurrentTime() {
  var timer = dom_id("timer");
  var input_time = timer.value / 100;
  var audio_length = Math.floor(audio.duration);
  current_time = input_time * audio_length;
  audio.currentTime = current_time;
}
var count = 0;
var n = 0;
//Play previous song
function playPrevAudio() {
  randomBackgroundColor();
  count--;
  n--;
  for (i = n; i <= count; i++) {
    if (count === -1) {
      audio_seri.innerHTML = `Playing music ${Album.seri[4]} of ${Album.seri.length}`;
      audio_name.innerHTML = Album.name[4];
      artist_name.innerHTML = Album.artist[4];
      audio_path.src = Album.path[4];
      audio_image.src = Album.image[4];
      playAudio();
      return (count = 4), (n = 4);
    } else {
      audio_seri.innerHTML = `Playing music ${Album.seri[i]} of ${Album.seri.length}`;
      audio_name.innerHTML = Album.name[i];
      artist_name.innerHTML = Album.artist[i];
      audio_path.src = Album.path[i];
      audio_image.src = Album.image[i];
      playAudio();
    }
  }
}
//Play next song
function playNextAudio() {
  randomBackgroundColor();
  count++;
  n++;
  for (i = n; i <= count; i++) {
    if (count === 5) {
      audio_seri.innerHTML = `Playing music ${Album.seri[0]} of ${Album.seri.length}`;
      audio_name.innerHTML = Album.name[0];
      artist_name.innerHTML = Album.artist[0];
      audio_path.src = Album.path[0];
      audio_image.src = Album.image[0];
      playAudio();
      return (count = 0), (n = 0);
    } else {
      audio_seri.innerHTML = `Playing music ${Album.seri[i]} of ${Album.seri.length}`;
      audio_name.innerHTML = Album.name[i];
      artist_name.innerHTML = Album.artist[i];
      audio_path.src = Album.path[i];
      audio_image.src = Album.image[i];
      playAudio();
    }
  }
}
//Change time song - Hàm setInterval
setInterval(myTimer, 1000);
function myTimer() {
  var cur_time = audio.currentTime;
  var cur_length = audio.duration;
  dom_id("timer").value = (100 * cur_time) / cur_length;
  //display_full_time
  var minute_part = Math.floor(audio.duration / 60);
  var second_part = Math.floor(audio.duration % 60);
  if (second_part < 10) {
    full_time_text.innerHTML = `0${minute_part}:0${second_part}`;
  } else {
    full_time_text.innerHTML = `0${minute_part}:${second_part}`;
  }
  //display_played_time
  if (audio.currentTime < 60) {
    if (audio.currentTime < 10) {
      played_time_text.innerHTML = `0:0${Math.floor(audio.currentTime)}`;
    } else {
      played_time_text.innerHTML = `0:${Math.floor(audio.currentTime)}`;
    }
  } else {
    c = Math.floor(audio.currentTime / 60);
    d = Math.floor(audio.currentTime % 60);
    if (d < 10) {
      played_time_text.innerHTML = `0${c}:0${d}`;
    } else {
      played_time_text.innerHTML = `0${c}:${d}`;
    }
  }
}
var shuffle = 0;
function turnModeShuffle() {
  if (shuffle === 0) {
    add("shuffle_btn", "text-danger");
    return (shuffle = 1);
  } else {
    remove("shuffle_btn", "text-danger");
    return (shuffle = 0);
  }
}
setInterval(checkShuffle, 1000);
function checkShuffle() {
  if (audio.ended === true) {
    if (shuffle === 1) {
      count = Math.floor(Math.random() * 5);
      audio_seri.innerHTML = `Playing music ${Album.seri[count]} of ${Album.seri.length}`;
      audio_name.innerHTML = Album.name[count];
      artist_name.innerHTML = Album.artist[count];
      audio_path.src = Album.path[count];
      audio_image.src = Album.image[count];
      playAudio();
    } else {
      count++;
      if (count === 5) {
        audio_seri.innerHTML = `Playing music ${Album.seri[0]} of ${Album.seri.length}`;
        audio_name.innerHTML = Album.name[0];
        artist_name.innerHTML = Album.artist[0];
        audio_path.src = Album.path[0];
        audio_image.src = Album.image[0];
        playAudio();
        return (count = 0), (n = 0);
      } else {
        audio_seri.innerHTML = `Playing music ${Album.seri[count]} of ${Album.seri.length}`;
        audio_name.innerHTML = Album.name[count];
        artist_name.innerHTML = Album.artist[count];
        audio_path.src = Album.path[count];
        audio_image.src = Album.image[count];
        playAudio();
      }
    }
  } else {
    if (shuffle === 1) {
      count = Math.floor(Math.random() * 5);
    }
  }
}
//random background color -- copy -- xem cho hiểu
function randomBackgroundColor() {
  var colorOne = populate();
  var colorTwo = populate();
  document.body.style.background =
    "linear-gradient(to right," + colorOne + "," + colorTwo + ")";
  document.querySelector(".slider").style.background =
    "linear-gradient(to right," + colorOne + "," + colorTwo + ")";
  // document.querySelector(".volume_slider").style.background =
  //   "linear-gradient(to right," + colorOne + "," + colorTwo + ")";
}
//random color
function populate() {
  var hex = [
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "a",
    "b",
    "c",
    "d",
    "e",
  ];
  var colorRandom = "#";
  for (var i = 0; i < 6; i++) {
    var x = Math.round(Math.random() * 14);
    var y = hex[x];
    colorRandom += y;
  }
  return colorRandom;
}
//reused function
function remove(id, name) {
  return dom_id(id).classList.remove(name);
}
function add(id, name) {
  return dom_id(id).classList.add(name);
}
function assignClassName(id, name) {
  dom_id(id).className = name;
}
