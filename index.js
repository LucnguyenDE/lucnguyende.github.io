//img
//đàonương: https://i.ytimg.com/vi/PM9Vc_agAqg/maxresdefault.jpg
//faded: https://cyber-music-player.vercel.app/images/Faded.jpg
//tsmt: https://salt.tikicdn.com/ts/tmp/d8/46/10/a4f728d583ca7693589375babeb07c9b.jpg
//xuânthángba: https://i1.sndcdn.com/artworks-YIesfXSZxuthUthD-2nO8eQ-t500x500.jpg
//dejavu: https://i1.sndcdn.com/artworks-LvTdHlotpRViB8DK-yIyxcw-t500x500.jpg
const Album = {
  song1: {
    name: "Faded",
    artist: "Alan Walker",
    path: "./songs/Alan Walker - Faded.mp3",
    image: "https://cyber-music-player.vercel.app/images/Faded.jpg",
  },
  song2: {
    name: "Đào nương",
    artist: "Hoàng Vương",
    path: "./songs/DaoNuong-HoangVuong-7037330.mp3",
    image: "https://i.ytimg.com/vi/PM9Vc_agAqg/maxresdefault.jpg",
  },
  song3: {
    name: "Deja vu",
    artist: "Olivia Rodrigo",
    path: "./songs/Deja Vu - Olivia Rodrigo.mp3",
    image:
      "https://i1.sndcdn.com/artworks-LvTdHlotpRViB8DK-yIyxcw-t500x500.jpg",
  },
  song4: {
    name: "Mộ tuyết",
    artist: "Thiên Sơn Mộ Tuyết OST",
    path: "./songs/MoTuyetThienSonMoTuyetOST-V.A-2982516.mp3",
    image:
      "https://salt.tikicdn.com/ts/tmp/d8/46/10/a4f728d583ca7693589375babeb07c9b.jpg",
  },
  song5: {
    name: "Xuân Tháng Ba",
    artist: "TunamTina",
    path: "./songs/XuanThangBa-TuNamTiNa-6231142.mp3",
    image:
      "https://i1.sndcdn.com/artworks-YIesfXSZxuthUthD-2nO8eQ-t500x500.jpg",
  },
};
console.log("Album.song1.artist: ", Album.song1.artist);
var audio = dom_id("audio");
function playAudio() {
  var button_pause = dom_id("pause");
  button_pause.classList.remove("d-none");
  var button_play = dom_id("play");
  button_play.classList.add("d-none");
  //Audio Animation
  var img = dom_id("img");
  img.className = "img_play_animation";
  //Wave Animation
  var wave = dom_id("wave_animation");
  wave.classList.remove("d-none");
  //Timer thumb animation
  audio.play();
}
function pauseAudio() {
  var button_pause = dom_id("pause");
  button_pause.classList.add("d-none");
  var button_play = dom_id("play");
  button_play.classList.remove("d-none");
  //Audio animation
  var img = dom_id("img");
  img.className = "img_pause_animation";
  //Wave animation
  var wave = dom_id("wave_animation");
  wave.classList.add("d-none");
  audio.pause();
}

//chỗ này đọc rồi viết ngắn lại
function reloadAudio() {
  var button_play = dom_id("play");
  button_play.classList.add("d-none");
  var button_pause = dom_id("pause");
  button_pause.classList.remove("d-none");
  //Audio animation
  var img = dom_id("img");
  img.className = "img_play_animation";
  //Wave animation
  var wave = dom_id("wave_animation");
  wave.classList.remove("d-none");
  audio.load();
  audio.play();
}

//volume
function adjustVolume() {
  var input_number = document.getElementById("adjust_volume").value / 100;
  audio.volume = input_number;
}
//Timer
function changeCurrentTime() {
  var timer = dom_id("timer");
  var input_time = timer.value / 100;
  var audio_length = Math.floor(audio.duration);
  current_time = input_time * audio_length;
  audio.currentTime = current_time;
}
var count = 0;
// Next Song - chỗ này dùng vòng for
function nextAudio() {
  count++;
  // if (count === 1) {
  //   var song_name = dom_id("name");
  //   song_name.innerHTML = Album.song2.name;
  //   var artist_name = dom_id("artist");
  //   artist_name.innerHTML = Album.song2.artist;
  //   var song_source = dom_id("audio");
  //   song_source.src = Album.song2.path;
  //   var image_source = dom_id("img");
  //   image_source.src = Album.song2.image;
  // }
  if (count === 1) {
    var song_name = dom_id("name");
    song_name.innerHTML = Album.song2.name;
    var artist_name = dom_id("artist");
    artist_name.innerHTML = Album.song2.artist;
    var song_source = dom_id("audio");
    song_source.src = Album.song2.path;
    var image_source = dom_id("img");
    image_source.src = Album.song2.image;
  } else if (count === 2) {
    var song_name = dom_id("name");
    song_name.innerHTML = Album.song3.name;
    var artist_name = dom_id("artist");
    artist_name.innerHTML = Album.song3.artist;
    var song_source = dom_id("audio");
    song_source.src = Album.song3.path;
    var image_source = dom_id("img");
    image_source.src = Album.song3.image;
  } else if (count === 3) {
    var song_name = dom_id("name");
    song_name.innerHTML = Album.song4.name;
    var artist_name = dom_id("artist");
    artist_name.innerHTML = Album.song4.artist;
    var song_source = dom_id("audio");
    song_source.src = Album.song4.path;
    var image_source = dom_id("img");
    image_source.src = Album.song4.image;
  } else if (count === 4) {
    var song_name = dom_id("name");
    song_name.innerHTML = Album.song5.name;
    var artist_name = dom_id("artist");
    artist_name.innerHTML = Album.song5.artist;
    var song_source = dom_id("audio");
    song_source.src = Album.song5.path;
    var image_source = dom_id("img");
    image_source.src = Album.song5.image;
    return (count = 0);
  }
  playAudio();
}

//Change time song
function changeThumbPosition() {
  var cur_time = audio.currentTime;
  var cur_length = audio.duration;
  dom_id("timer").value = (100 * cur_time) / cur_length;
}
//Update continous
setInterval(myTimer, 1000);
function myTimer() {
  var cur_time = audio.currentTime;
  var cur_length = audio.duration;
  dom_id("timer").value = (100 * cur_time) / cur_length;
  //Max_length
  var max_length = dom_id("max_length");
  max_minute = Math.floor(audio.duration / 60);
  max_second = Math.floor(audio.duration % 60);
  max_length.innerHTML = `0${max_minute}:${max_second}`;
  //min_length
  var min_length = dom_id("min_length");
  if (audio.currentTime < 60) {
    if (audio.currentTime < 10) {
      min_length.innerHTML = `0:0${Math.floor(audio.currentTime)}`;
    } else {
      min_length.innerHTML = `0:${Math.floor(audio.currentTime)}`;
    }
  } else {
    c = Math.floor(audio.currentTime / 60);
    d = Math.floor(audio.currentTime % 60);
    if (d < 10) {
      min_length.innerHTML = `0${c}:0${d}`;
    } else {
      min_length.innerHTML = `0${c}:${d}`;
    }
  }
}
