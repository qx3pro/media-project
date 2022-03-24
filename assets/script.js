let info = {
  aot: {
    title: "Attack on titan",
    descrption: "Fueled by the death of his mother at the hands of the titans, Eren Jaeger vows revenge against the species that have breached through the enclosing walls after 100 years of peace, threatening the remains of humanity.",
    img: "aot.jpg",
  },
  deathnote: {
    title: "DeathNote",
    descrption: "An intelligent high school student goes on a secret crusade to eliminate criminals from the world after discovering a notebook capable of killing anyone whose name is written into it.",
    img: "deathnote.jpg",
  },
  demon: {
    title: "Demon Slayer: Kimetsu no Yaiba",
    descrption: "A family is attacked by demons and only two members survive - Tanjiro and his sister Nezuko, who is turning into a demon slowly. Tanjiro sets out to become a demon slayer to avenge his family and cure his sister.",
    img: "demon.jpg",
  },
};

console.log(info);

function viewDetails(key) {
  let data = info[key];
  let [name, desc, img] = [data["title"], data["descrption"], data["img"]];

  document.getElementById("infoContainer").style.display = "flex";
  document.getElementById("detail-title").innerHTML = name;
  document.getElementById("detail-info").innerHTML = desc;
  document.getElementById("detail-img").src = "./assets/images/" + img;
}

function changeView(type) {
  hideAll();
  if (type == "movies") {
    document.getElementById("moviesList").style.display = "flex";
  } else if (type == "shows") {
    document.getElementById("showsList").style.display = "flex";
  } else if (type == "anime") {
    document.getElementById("animeList").style.display = "flex";
  }
}

function hideAll() {
  document.getElementById("showsList").style.display = "none";
  document.getElementById("moviesList").style.display = "none";
  document.getElementById("animeList").style.display = "none";
  document.getElementById("infoContainer").style.display = "none";
}
