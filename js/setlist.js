const songs = [
  {
    title: "Jesus lived in a motel room",
    part: "1",
    meta: "원곡 | 혁오\n참여 | 문민기(V) 임경재(G) 조아름(B) 임채은(D)",
    lyrics: `I had to tell you
Don't you feel fear
Done telling people no need to say
I had to tell you
Why can't you hear
Anxiety surrounding me
... (생략)`
  },
  {
    title: "Jesus lived in a motel room",
    part: "2",
    meta: "원곡 | 혁오\n참여 | 문민기(V) 임경재(G) 조아름(B) 임채은(D)",
    lyrics: "Same song for part 2..."
  }
];

const songList = document.getElementById("songList");
const detailHeader = document.querySelector(".song-detail-header");
const lyricsBox = document.querySelector(".song-lyrics-scroll");
const tabs = document.querySelectorAll(".tab");

function renderSongs(part) {
  songList.innerHTML = "";
  songs
    .filter(song => song.part === part)
    .forEach(song => {
      const li = document.createElement("li");
      li.textContent = song.title;
      li.addEventListener("click", () => {
        const isOpen = detailHeader.textContent === song.title;
        if (isOpen) {
          detailHeader.innerHTML = "클릭하여 세부정보를 확인해주세요!<br />창을 다시 클릭하면 창이 닫힙니다.";
          lyricsBox.innerHTML = "";
        } else {
          detailHeader.innerHTML = `<strong>${song.title}</strong><br><span style="font-size:0.85rem;">${song.meta.replaceAll("\n", "<br>")}</span>`;
          lyricsBox.textContent = song.lyrics;
        }
      });
      songList.appendChild(li);
    });
}

// 탭 전환
tabs.forEach(tab => {
  tab.addEventListener("click", () => {
    tabs.forEach(t => t.classList.remove("active"));
    tab.classList.add("active");
    renderSongs(tab.dataset.part);
    detailHeader.innerHTML = "클릭하여 세부정보를 확인해주세요!<br />창을 다시 클릭하면 창이 닫힙니다.";
    lyricsBox.innerHTML = "";
  });
});

// 초기 로딩
renderSongs("1");